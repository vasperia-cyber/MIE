import { useEffect } from "react";

export const NativeAd = () => {
  useEffect(() => {
    // 1. Kan-creéw l-script tag
    const script = document.createElement("script");
    script.src = "https://pl29088745.profitablecpmratenetwork.com/c257efc2ef18adcfb6b1fc1cd490786f/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // 2. Kan-hatiwh west l-container mli l-page kat-chargat
    const container = document.getElementById("container-c257efc2ef18adcfb6b1fc1cd490786f");
    if (container && !container.hasChildNodes()) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="my-4 flex justify-center">
      {/* Hada howa l-container fin ghat-ban l-pub */}
      <div id="container-c257efc2ef18adcfb6b1fc1cd490786f"></div>
    </div>
  );
};