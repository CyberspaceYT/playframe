import { useEffect } from "react";

export const useTabVisibility = () => {
  useEffect(() => {
    const handleBlur = () => {
      // Change title when user leaves tab
      document.title = "PlayFrameGames";

      // Change favicon when user leaves tab
      const favicon = document.querySelector(
        'link[rel="icon"]'
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href =
          "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";
      } else {
        // If no favicon link exists, create one
        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href =
          "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";
        document.head.appendChild(newFavicon);
      }
    };

    const handleFocus = () => {
      // Optionally restore original title/favicon when user returns
      // You can customize this behavior as needed
      document.title = "PlayFrame";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
};
