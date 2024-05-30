import { DeviceEnum } from "@shared/enums";
import { TMediaQuery, TDevice, TDimensions } from "@shared/types";
import { useEffect, useState } from "react";

export const useMediaQuery = (): TMediaQuery => {
  const [device, setDevice] = useState<TDevice>(null);
  const [dimensions, setDimensions] = useState<TDimensions>(null);

  useEffect(() => {
    const checkDevice = () => {
      const windowDevice = getDeviceByWindowMediaMatch();
      setDevice(windowDevice);
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
};

function getDeviceByWindowMediaMatch(): DeviceEnum {
  if (isMatchMediaWindow("(max-width: 640px)")) {
    return DeviceEnum.MOBILE;
  } else if (isMatchMediaWindow("(min-width: 641px) and (max-width: 1024px)")) {
    return DeviceEnum.TABLET;
  } else {
    return DeviceEnum.DESKTOP;
  }
}

const isMatchMediaWindow = (value: string) => window.matchMedia(value).matches;
