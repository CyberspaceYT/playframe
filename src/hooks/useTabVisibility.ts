import { useEffect } from "react";

const ACTIVE_FAVICON = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352">
    <style>
      path { fill: #fff; }
      @media (prefers-color-scheme: light) { path { fill: #000; } }
    </style>
    <path d="M176 0c-12 88-28 132-64 168-36 36-80 52-112 56 32 4 76 20 112 56 36 36 52 80 64 72 12 8 28-36 64-72 36-36 80-52 112-56-32-4-76-20-112-56C204 132 188 88 176 0Z"/>
  </svg>
`)}`;

export const useTabVisibility = () => {
  useEffect(() => {
    // Store original favicon
    const originalFavicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;
    const originalFaviconHref = originalFavicon?.href || "";

    const handleBlur = () => {
      // Show the original Drive branding when the tab is inactive.
      document.title = "My Drive | Google Drive";

      const favicon = document.querySelector(
        'link[rel="icon"]'
      ) as HTMLLinkElement;
      if (favicon && originalFaviconHref) {
        favicon.href = originalFaviconHref;
      }
    };

    const handleFocus = () => {
      // Show PlayFrame branding while the tab is active.
      document.title = "PlayFrame";

      const favicon = document.querySelector(
        'link[rel="icon"]'
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = ACTIVE_FAVICON;
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
};
