import React, { useEffect } from "react";

const cssLinks = [
  "css/bootstrap.min.css",
  "plugins/revolution/css/settings.css",
  "plugins/revolution/css/layers.css",
  "plugins/revolution/css/navigation.css",
  "css/style.css",
];

const jsLinks = [
 // "js/email-decode.min.js",
  "js/jquery.js",
  "js/popper.min.js",
  "plugins/revolution/js/jquery.themepunch.revolution.min.js",
  "plugins/revolution/js/jquery.themepunch.tools.min.js",
  "plugins/revolution/js/extensions/revolution.extension.actions.min.js",
  "plugins/revolution/js/extensions/revolution.extension.carousel.min.js",
  "plugins/revolution/js/extensions/revolution.extension.kenburn.min.js",
  "plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js",
  "plugins/revolution/js/extensions/revolution.extension.migration.min.js",
  "plugins/revolution/js/extensions/revolution.extension.navigation.min.js",
  "plugins/revolution/js/extensions/revolution.extension.parallax.min.js",
  "plugins/revolution/js/extensions/revolution.extension.slideanims.min.js",
  "plugins/revolution/js/extensions/revolution.extension.video.min.js",
  "js/main-slider-script.js",
  "js/bootstrap.min.js",
  "js/jquery.fancybox.js",
  "js/wow.js",
  "js/appear.js",
  "js/gsap.min.js",
  "js/ScrollTrigger.min.js",
  "js/SplitText.min.js",
  "js/splitType.js",
  "js/bundled-lenis.min.js",
  "js/select2.min.js",
  "js/aos.js",
  "js/odometer.js",
  "js/owl.js",
  "js/script.js",
  "js/script-gsap.js",
];

function UserTemplate({ children }) {
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

    // Load JS Sequentially
    const loadScriptsSequentially = async () => {
      for (const src of jsLinks) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.defer = true;
          script.async = false; // Ensure execution order
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

export default UserTemplate;
