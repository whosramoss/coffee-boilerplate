import { TProductCoffee } from "@shared/types";
import { HttpMethodEnum } from "@shared/enums";

export default class ProductCoffeeService {
  public url: string = "/api/product-coffee";
  public externalUrl: string = "https://fake-coffee-api.vercel.app/api";

  public async getListProductCoffee(): Promise<TProductCoffee[]> {
    try {
      const response = await fetch(this.url, {
        method: HttpMethodEnum.GET,
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] GetListProductCoffee");
    }
  }

  public async getLimitListProductCoffee(
    limit: number,
  ): Promise<TProductCoffee[]> {
    try {
      const response = await fetch(`${this.url}?limit=${limit}`, {
        method: HttpMethodEnum.GET,
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] GetLimitListProductCoffee ");
    }
  }

  public async getSortListProductCoffee(
    sort: "asc" | "desc",
  ): Promise<TProductCoffee[]> {
    try {
      const response = await fetch(`${this.url}?sort=${sort}`, {
        method: HttpMethodEnum.GET,
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] GetSortListProductCoffee ");
    }
  }

  public async getProductCoffeeById(id: number): Promise<TProductCoffee> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: HttpMethodEnum.GET,
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] GetProductCoffeeById ");
    }
  }

  public async createProductCoffee(coffee: TProductCoffee): Promise<any> {
    try {
      const response = await fetch(this.url, {
        method: HttpMethodEnum.POST,
        body: JSON.stringify(coffee),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] CreateProductCoffee ");
    }
  }

  public async updateProductCoffee(
    id: number,
    coffee: TProductCoffee,
  ): Promise<any> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: HttpMethodEnum.PUT,
        body: JSON.stringify(coffee),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] UpdateProductCoffee ");
    }
  }

  public async deleteProductCoffee(id: number): Promise<any> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: HttpMethodEnum.DELETE,
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("[Service Error] DeleteProductCoffee ");
    }
  }
}
