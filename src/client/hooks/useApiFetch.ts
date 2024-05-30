import { HttpMethodEnum } from "@shared/enums";
import useSWR from "swr";

type TApiRequest = {
  url: string;
  query?: {
    method: HttpMethodEnum;
    body?: BodyInit;
  };
};

export const useApiFetch = <T>({ url, query }: TApiRequest) => {
  const setQuery = () => {
    const { method, body } = query || { method: HttpMethodEnum.GET };

    const value: {
      [x: string]: string;
      method: HttpMethodEnum;
    } = { method };

    if (body) {
      value.body = JSON.stringify(body);
    }

    return value;
  };

  const setFetch = async <JSON = any>(): Promise<JSON> => {
    const res = await fetch(url, setQuery());

    if (!res.ok) {
      const json = await res.json();
      if (json.error) {
        const error = new Error(json.error) as Error & {
          status: number;
        };
        error.status = res.status;
        throw error;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }

    return res.json();
  };

  const { data, error, isLoading, isValidating } = useSWR<T>(url, setFetch);

  return { data, error, isLoading, isValidating };
};
