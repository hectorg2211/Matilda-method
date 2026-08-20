"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import {
  CAL_EMBED_CONFIG,
  CAL_NAMESPACE,
  CAL_UI,
  cal,
  calEmbedJsUrl,
} from "@/lib/cal";

const INLINE_NS = `${CAL_NAMESPACE}-inline`;
const MOBILE_QUERY = "(max-width: 767px)";

type BookerLayout = "month_view" | "column_view";

export function CalInline() {
  const [layout, setLayout] = useState<BookerLayout | null>(null);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const sync = () => setLayout(media.matches ? "column_view" : "month_view");
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!cal || !layout) return;

    let cancelled = false;

    void (async () => {
      const calApi = await getCalApi({
        namespace: INLINE_NS,
        embedJsUrl: calEmbedJsUrl(cal.origin),
      });
      if (cancelled) return;
      calApi("ui", {
        ...CAL_UI,
        layout,
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [layout]);

  if (!cal || !layout) {
    return (
      <div className="flex items-center justify-center px-5 py-10">
        <span className="text-[14px] text-plum-soft/70">Loading times…</span>
      </div>
    );
  }

  return (
    <Cal
      key={layout}
      namespace={INLINE_NS}
      calLink={cal.link}
      calOrigin={cal.origin}
      embedJsUrl={calEmbedJsUrl(cal.origin)}
      config={{
        ...CAL_EMBED_CONFIG,
        layout,
        hideEventTypeDetails: "true",
        useSlotsViewOnSmallScreen: "true",
        "ui.autoscroll": "false",
      }}
      style={{ width: "100%", overflow: "visible" }}
    />
  );
}
