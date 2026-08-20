const DEFAULT_ORIGIN = "https://cal.com";

export type CalBooking = {
  link: string;
  origin: string;
};

export const CAL_NAMESPACE = "clarity-call";

export const CAL_EMBED_CONFIG = {
  theme: "light",
  hideBranding: "true",
  hideEventTypeDetails: "true",
  useSlotsViewOnSmallScreen: "true",
  "ui.autoscroll": "false",
} as const;

export const CAL_EMBED_CONFIG_JSON = JSON.stringify(CAL_EMBED_CONFIG);

export const CAL_UI = {
  theme: "light" as const,
  hideEventTypeDetails: true,
  hideBranding: true,
  styles: {
    branding: {
      brandColor: "#7a5c28",
    },
  },
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#7a5c28",
      "cal-brand-emphasis": "#5c3a4c",
      "cal-brand-text": "#faf3ea",
      "cal-brand-subtle": "#cda96a",
      "cal-brand-accent": "#faf3ea",
      "cal-text": "#3d1830",
      "cal-text-emphasis": "#3d1830",
      "cal-text-subtle": "#5c3a4c",
      "cal-text-muted": "#8a6a58",
      "cal-text-inverted": "#faf3ea",
      "cal-bg": "#faf3ea",
      "cal-bg-emphasis": "#f3d9b8",
      "cal-bg-subtle": "#f6ead8",
      "cal-bg-muted": "#faf3ea",
      "cal-bg-inverted": "#3d1830",
      "cal-border": "#ead9c4",
      "cal-border-emphasis": "#cda96a",
      "cal-border-subtle": "#ead9c4",
      "cal-border-muted": "#f3d9b8",
      "cal-border-booker": "transparent",
      "cal-border-booker-width": "0px",
      radius: "0.75rem",
    },
    dark: {
      "cal-brand": "#cda96a",
      "cal-brand-emphasis": "#c9a24b",
      "cal-brand-text": "#3d1830",
      "cal-brand-subtle": "#5c3a4c",
      "cal-brand-accent": "#3d1830",
    },
  },
};

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

function parseCalLink(
  raw: string | undefined,
  originOverride: string | undefined,
): CalBooking | null {
  if (!raw?.trim()) return null;

  const value = raw.trim();
  const originFromEnv = originOverride?.trim().replace(/\/+$/, "") || undefined;

  if (/^https?:\/\//i.test(value)) {
    try {
      const url = new URL(value);
      const path = trimSlashes(url.pathname);
      if (!path) return null;
      return {
        link: path,
        origin: originFromEnv ?? `${url.protocol}//${url.host}`,
      };
    } catch {
      return null;
    }
  }

  if (value.includes(".") && value.includes("/")) {
    try {
      const url = new URL(`https://${value}`);
      const path = trimSlashes(url.pathname);
      if (!path) return null;
      return {
        link: path,
        origin: originFromEnv ?? `https://${url.host}`,
      };
    } catch {
      return null;
    }
  }

  const path = trimSlashes(value);
  if (!path) return null;

  return {
    link: path,
    origin: originFromEnv ?? DEFAULT_ORIGIN,
  };
}

export const cal = parseCalLink(
  process.env.NEXT_PUBLIC_CAL_LINK,
  process.env.NEXT_PUBLIC_CAL_ORIGIN,
);

export function calEmbedJsUrl(origin: string) {
  return origin === DEFAULT_ORIGIN ? undefined : `${origin}/embed/embed.js`;
}
