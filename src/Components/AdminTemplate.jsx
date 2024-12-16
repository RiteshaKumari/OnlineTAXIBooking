import React, { useEffect } from "react";

const cssLinks = [
 "css/AdminDashboard.module.css"
];

const jsLinks = [
 
];

function AdminTemplate({ children }) {
  useEffect(() => {
    const head = document.head;

    // Load CSS
    const linkElements = cssLinks.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      head.appendChild(link);
      return link;
    });

    const loadScriptsSequentially = async () => {
      for (const src of jsLinks) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.defer = true; 
          script.async = false; // Maintain execution order
          script.onload = resolve;
          head.appendChild(script);
        });
      }
    };

    loadScriptsSequentially();

    // Cleanup on unmount
    return () => {
      linkElements.forEach((link) => head.removeChild(link));
      head.querySelectorAll("script").forEach((script) => {
        if (jsLinks.includes(script.src)) {
          head.removeChild(script);
        }
      });
    };
  }, []);

  return <>{children}</>;
}

export default AdminTemplate;
