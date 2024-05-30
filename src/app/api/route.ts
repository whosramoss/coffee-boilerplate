import { coffeeListSchema } from "@schemas/CoffeeSchema";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = coffeeList;
    const parsedData = coffeeListSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("[Validation Error]", parsedData.error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "failed to load data from route GET" },
      { status: 500 },
    );
  }
}

const coffeeList = [
  {
    title: "Black Coffee",
    description:
      "Black coffee is as simple as it gets with ground coffee beans soaked in hot water, served hot. And if you want to sound fancy, you can call black coffee by its proper name: café noir.",
    ingredients: ["Coffee"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 971708,
  },
  {
    title: "Latte",
    description:
      "As the most popular coffee drink out there, the latte consists of a shot of espresso and steamed milk with just a touch of foam. It can be ordered unflavored or flavored with everything from vanilla to pumpkin spice.",
    ingredients: ["Espresso", "Ångad mjölk"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    id: 331757,
  },
  {
    title: "Caramel Latte",
    description:
      "If you like lattes with a special taste, caramel lattes may be the best option to give you an experience of the natural sweetness and creaminess of steamed milk and caramel.",
    ingredients: ["Espresso", "Ångad mjölk", "Karamellsirap"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 514803,
  },
  {
    title: "Cappuccino",
    description:
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that add flavorings as well.",
    ingredients: ["Espresso", "Ångad mjölk", "Foam"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 663816,
  },
  {
    title: "Americano",
    description:
      "With a similar flavor to black coffee, americano consists of an espresso shot diluted with hot water.",
    ingredients: ["Espresso", "Hett vatten"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 521427,
  },
  {
    title: "Espresso",
    description:
      "An espresso shot can be served alone or used as a base for most coffee drinks, such as lattes and macchiatos.",
    ingredients: ["Espresso"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 12026,
  },
  {
    title: "Macchiato",
    description:
      "The macchiato is another espresso-based drink that has a small amount of foam on top. It's the happy middle ground between a cappuccino and a doppio.",
    ingredients: ["Espresso", "Foam"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 722278,
  },
  {
    title: "Mocha",
    description:
      "For all the chocolate lovers out there, you will fall in love with a mocha. Mocha is a chocolate espresso drink with steamed milk and foam.",
    ingredients: ["Espresso", "Ångad mjölk", "Choklad"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 733617,
  },
  {
    title: "Hot Chocolate",
    description:
      "On cold winter days, a cup of hot chocolate makes you feel cozy and happy. It also makes you feel good because it contains energizing caffeine.",
    ingredients: ["Choklad", "Mjölk"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 105251,
  },
  {
    title: "Chai Latte",
    description:
      "If you are looking for a tasty hot drink in the middle of winter, choose the chai latte. The combination of cardamom and cinnamon gives a wonderful taste.",
    ingredients: ["Te", "Mjölk", "Ingefära", "Kardemumma", "Kanel"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 889013,
  },
  {
    title: "Matcha Latte",
    description:
      "Matcha latte is a green, healthy coffee drink with finely crushed matcha tea and milk, offering mild sweetness, a unique flavor and a mild caffeine kick.",
    ingredients: ["Matcha-pulver", "Mjölk", "Socker*"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
    id: 355450,
  },
  {
    title: "Seasonal Brew",
    description:
      "Seasonal coffee with different flavors such as caramel, fruit and chocolate",
    ingredients: ["Kaffe"],
    type: "hot",
    image:
      "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 900040,
  },
  {
    title: "Svart Te",
    description:
      "Black tea was born in China. It is made from the leaves of a plant called Camellia and can be flavored differently with fruits for example. A pleasant, warm, tasty and aromatic drink that is suitable for everyday life.",
    ingredients: ["Te"],
    type: "iced",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    id: 582017,
  },
  {
    title: "Frapino Caramel",
    description:
      "It's a blended or better said shaken coffee with whipped cream on top. A must for hot summer days.",
    ingredients: [
      "coffee",
      "Is",
      "Mjölk",
      "Karamellsirap",
      "Vispgrädde*",
      "Karamellsås",
    ],
    type: "iced",
    image:
      "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMGNhcmFtZWx8ZW58MHx8MHx8fDA%3D",
    id: 541419,
  },
  {
    title: "Frapino Mocka",
    description:
      "Another famous and delicious cold drink for those who prefer chocolate. Imagine the taste of a shake with chocolate and whipped cream on top.",
    ingredients: ["Coffee", "Is", "Mjölk", "Cocoa", "Vispgrädde*"],
    type: "iced",
    image:
      "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMG1vY2hhfGVufDB8fDB8fHww",
    id: 241039,
  },
  {
    title: "Iced Coffee",
    description:
      "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
    ingredients: ["Coffee", "Ice", "Sugar*", "Cream*"],
    type: "iced",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
    id: 539447,
  },
  {
    title: "Frappuccino",
    description:
      "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that's topped with whipped cream and syrup. ",
    ingredients: ["Espresso", "Blended ice", "Whip*"],
    type: "iced",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG",
    id: 502387,
  },
  {
    title: "Nitro",
    description:
      "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It's poured via a nitro tap, too.)",
    ingredients: ["Coffee", "Nitrogen bubbles", "Sugar*", "Cream*"],
    type: "iced",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg",
    id: 631042,
  },
  {
    title: "Mazagran",
    description:
      "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.",
    ingredients: ["Coffee", "Sugar", "Lemon", "Rum*"],
    type: "iced",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Caf%C3%A9_mazagran.jpg",
    id: 809355,
  },
];
