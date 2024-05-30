import { productCoffeeSchema } from "@schemas/ProductCoffeeSchema";
import ProductCoffeeService from "@services/ProductCoffeeService";
import { HttpMethodEnum } from "@shared/enums";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export const PUT = async (request: NextRequest, { params }: Params) => {
  try {
    const id = params.id;
    const body = await request.json();
    const parseData = productCoffeeSchema.safeParse(body);

    if (!parseData.success) {
      return NextResponse.json(
        { message: `Data passed is incorrect : ${parseData.error} ` },
        { status: 422 },
      );
    }

    const externalUrl = new ProductCoffeeService().externalUrl;
    const fetchData = await fetch(`${externalUrl}/${id}`, {
      method: HttpMethodEnum.PUT,
      body: JSON.stringify(body),
    });

    if (!fetchData.ok) {
      return NextResponse.json(
        { message: `Failed to update data: ${fetchData.statusText}` },
        { status: 400 },
      );
    }

    const response = await fetchData.json();
    console.log(response);

    return NextResponse.json(
      { message: "Successfully Update a ProductCoffee" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to update data" },
      { status: 500 },
    );
  }
};

export const DELETE = async (request: NextRequest, { params }: Params) => {
  try {
    const id = params.id;
    const externalUrl = new ProductCoffeeService().externalUrl;
    const fetchData = await fetch(`${externalUrl}/${id}`, {
      method: HttpMethodEnum.DELETE,
    });

    if (!fetchData.ok) {
      return NextResponse.json(
        { message: `Failed to delete data: ${fetchData.statusText}` },
        { status: 400 },
      );
    }

    const response = await fetchData.json();
    console.log(response);

    return NextResponse.json(
      { message: "Successfully Delete a ProductCoffee" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete data" },
      { status: 500 },
    );
  }
};
