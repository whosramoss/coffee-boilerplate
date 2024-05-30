import * as z from "zod";

export const coffeeSchema = z.object({
  title: z.string(),
  description: z.string(),
  ingredients: z.array(z.string()),
  image: z.string(),
  type: z.string(),
  id: z.number(),
});

export const coffeeListSchema = z.array(coffeeSchema);
