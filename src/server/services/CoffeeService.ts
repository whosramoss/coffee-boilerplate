import { HttpMethodEnum } from "@shared/enums";
import { TCoffee } from "@shared/types";

export default class CoffeeService {
  public url: string = "/api";

  public async getListByFilter(): Promise<TCoffee[]> {
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
      throw new Error("[Service Error] getListByFilter");
    }
  }
}
