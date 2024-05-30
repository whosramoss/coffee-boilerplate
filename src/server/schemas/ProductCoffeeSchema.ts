import * as z from "zod";

export const productCoffeeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  region: z.string(),
  weight: z.number(),
  flavor_profile: z.array(z.string()),
  grind_option: z.array(z.string()),
  roast_level: z.number(),
  image_url: z.string(),
});

export const productCoffeeListSchema = z.array(productCoffeeSchema);
