import {
  productCoffeeListSchema,
  productCoffeeSchema,
} from "@schemas/ProductCoffeeSchema";
import ProductCoffeeService from "@services/ProductCoffeeService";
import { HttpMethodEnum } from "@shared/enums";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const urlParams = new URLSearchParams(
      request.url.replace(/^(.*?)\?/gms, ""),
    );

    if (urlParams.has("sort") && urlParams.has("limit")) {
      return NextResponse.json(
        {
          message: 'The "sort" and "limit" parameters cannot be used together',
        },
        { status: 400 },
      );
    }

    const queryParams: { [key: string]: string } = {};
    if (urlParams.has("sort")) {
      queryParams.sort = urlParams.get("sort") as string;
    } else if (urlParams.has("limit")) {
      queryParams.limit = urlParams.get("limit") as string;
    }

    const queryString = new URLSearchParams(queryParams);
    const externalUrl = new ProductCoffeeService().externalUrl;
    const url = `${externalUrl}?${queryString.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json(
        { message: `Failed to create data: ${response.statusText}` },
        { status: 400 },
      );
    }

    const data = await response.json();

    const parsedData = productCoffeeListSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("[Validation Error]", parsedData.error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    return NextResponse.json(parsedData.data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to GET data" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseData = productCoffeeSchema.safeParse(body);

    if (!parseData.success) {
      return NextResponse.json(
        { message: `Data passed is incorrect : ${parseData.error} ` },
        { status: 422 },
      );
    }

    const externalUrl = new ProductCoffeeService().externalUrl;
    const fetchData = await fetch(externalUrl, {
      method: HttpMethodEnum.POST,
      body: JSON.stringify(body),
    });

    if (!fetchData.ok) {
      return NextResponse.json(
        { message: `Failed to create data: ${fetchData.statusText}` },
        { status: 400 },
      );
    }

    const response = await fetchData.json();
    console.log(response);

    return NextResponse.json(
      { message: "Successfully Created a ProductCoffee" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to POST data" },
      { status: 500 },
    );
  }
}
