import { coffeeSchema } from "@schemas/CoffeeSchema";
import { productCoffeeSchema } from "@schemas/ProductCoffeeSchema";
import { DeviceEnum, TabEnum } from "@shared/enums";
import { z } from "zod";

export type TDevice = DeviceEnum | null;
export type TDimensions = { width: number; height: number } | null;

export type TMediaQuery = {
  device: TDevice;
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type TTabBar = {
  tab: TabEnum;
  isActive: boolean;
  view: React.JSX.Element;
};

export type TNotification = {
  id: number;
  text: string;
};

export type TCoffee = z.infer<typeof coffeeSchema>;

export type TProductCoffee = z.infer<typeof productCoffeeSchema>;

export const testProductCoffeeSchema: TProductCoffee = {
  id: 1,
  name: "Signature Blend",
  description: "Goode coffee",
  price: 12.99,
  region: "Central America",
  weight: 500,
  flavor_profile: ["Dark Chocolate"],
  grind_option: ["Espresso"],
  roast_level: 3,
  image_url: "https://iili.io/H8Y78Qt.webp",
};
