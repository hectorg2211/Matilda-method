"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {
  CAL_EMBED_CONFIG,
  CAL_NAMESPACE,
  CAL_UI,
  cal,
  calEmbedJsUrl,
} from "@/lib/cal";

const INLINE_NS = `${CAL_NAMESPACE}-inline`;

const INLINE_UNLOCK_CSS = `
:host {
  height: auto !important;
  max-height: none !important;
}
iframe.cal-embed {
  max-height: none !important;
}
@media (max-width: 767px) {
  :host {
    min-height: 48rem !important;
    clip-path: none !important;
  }
  iframe.cal-embed {
    min-height: 48rem !important;
  }
}
`;

function unlockCalInline(host: HTMLElement) {
  host.style.height = "auto";
  host.style.maxHeight = "none";

  const root = host.shadowRoot;
  if (!root) return;

  const iframe = root.querySelector("iframe");
  if (iframe instanceof HTMLElement) {
    iframe.style.maxHeight = "none";
  }

  if (host.dataset.mmUnlock !== "true") {
    host.dataset.mmUnlock = "true";
    const style = document.createElement("style");
    style.textContent = INLINE_UNLOCK_CSS;
    root.appendChild(style);
  }
}

export function CalInline() {
  useEffect(() => {
    if (!cal) return;

    let cancelled = false;

    const observer = new MutationObserver(() => {
      document.querySelectorAll("cal-inline").forEach((node) => {
        unlockCalInline(node as HTMLElement);
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    void (async () => {
      const calApi = await getCalApi({
        namespace: INLINE_NS,
        embedJsUrl: calEmbedJsUrl(cal.origin),
      });
      if (cancelled) return;
      calApi("ui", CAL_UI);
    })();

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  if (!cal) return null;

  return (
    <Cal
      namespace={INLINE_NS}
      calLink={cal.link}
      calOrigin={cal.origin}
      embedJsUrl={calEmbedJsUrl(cal.origin)}
      config={CAL_EMBED_CONFIG}
      style={{ width: "100%", height: "auto", overflow: "visible" }}
    />
  );
}
