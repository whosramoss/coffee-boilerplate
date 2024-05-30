import { PARALLAX_IMAGE_CLASS } from "@shared/meta";
import { useEffect } from "react";
import Ukiyo from "ukiyojs";

export const useAnimationParallax = () => {
  useEffect(() => {
    const parallax = new Ukiyo(`.${PARALLAX_IMAGE_CLASS}`, {
      externalRAF: true,
    });
    function raf() {
      parallax.animate();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
};
