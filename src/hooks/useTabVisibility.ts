import { useEffect } from "react";

const ACTIVE_FAVICON = "/favicon-black.svg";

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
