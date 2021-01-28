import axios from "axios";
import * as types from "./types";
import * as queries from "./queries";

interface headers {
  Accept: string;
  "Content-Type": string;
  Authorization?: string;
}

class Client {
  accessToken?: string;

  headers: headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  constructor(accessToken?: string) {
    if (accessToken) {
      this.accessToken = accessToken;
      this.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }

  public async fetch<T>(queryObj: types.QueryObject): Promise<T> {
    const { query, variables } = queryObj;
    return await axios
      .post(
        "https://graphql.anilist.co/",
        {
          query,
          variables,
        },
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        const r = response.data;
        if (r.data.Page) return r.data.Page;
        else if (r.data) return r.data;
        else return r;
      })
      .catch((err) => {
        throw {
          error: err.message,
        };
      });
  }
}

export { Client, types, queries };
