import axios from "axios";
import * as types from "./types";
import * as queries from "./queries";
import jwtDecode from "jwt-decode";

interface headers {
  Accept: string;
  "Content-Type": string;
  Authorization?: string;
}

class Client {
  readonly accessToken?: string | null;

  readonly headers: headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  readonly userId: types.Scalars["Int"];

  constructor(accessToken?: string) {
    if (accessToken) {
      this.accessToken = accessToken;
      this.headers.Authorization = `Bearer ${accessToken}`;
      this.userId = jwtDecode(accessToken);
    } else {
      this.userId = -1;
      this.accessToken = null;
    }
  }

  private async fetch<T>(queryObj: types.QueryObject): Promise<T> {
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

  public async fetchUser(): Promise<types.User> {
    if (!this.accessToken) throw { error: "User must be authenticated." };
    
    return await this.fetch<types.User>(queries.User.FETCH_USER());
  }

  public async fetchUserAnimeList(
    status: types.MediaListStatus
  ): Promise<types.MediaListCollection> {
    if (this.userId === -1) throw { error: "User must be authenticated." };

    return await this.fetch<types.MediaListCollection>(
      queries.User.USER_ANIME_LIST({
        userId: this.userId,
        status: status,
      })
    );
  }

  public async fetchUserMangaList(
    status: types.MediaListStatus
  ): Promise<types.MediaListCollection> {
    if (this.userId === -1) throw { error: "User must be authenticated." };

    return await this.fetch<types.MediaListCollection>(
      queries.User.USER_MANGA_LIST({
        userId: this.userId,
        status: status,
      })
    );
  }
}

export { Client, types, queries };
