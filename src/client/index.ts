"use strict"; 
import axios from "axios";
import jsonwebtoken from "jsonwebtoken";
import { User, Media } from "../queries";
import {
  headers,
  Scalars,
  QueryObject,
  User as UserType,
  MediaListCollection,
  QueryPageArgs,
  MediaStatus,
  SeasonYear,
  Media as MediaType,
} from "../types";

export class Client {
  readonly accessToken?: string;

  readonly headers: headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  readonly userId?: Scalars["Int"];

  constructor(accessToken?: string) {
    if (accessToken) {
      const decoded = jsonwebtoken.decode(accessToken);
      if (decoded) {
        this.accessToken = accessToken;
        this.headers.Authorization = `Bearer ${accessToken}`;
        this.userId = (<any>decoded).sub;
      }
    }
  }

  async fetch<T>(queryObj: QueryObject): Promise<T> {
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
        const r = response.data.data;
        if (r.Page) return r.Page;
        else if (r.Viewer) return r.Viewer;
        else if (r.MediaListCollection) return r.MediaListCollection;
        else return r;
      })
      .catch((err) => {
        throw {
          error: err.message,
        };
      });
  }

  async fetchUser(): Promise<UserType> {
    if (!this.userId) throw { error: "User must be authenticated." };

    return await this.fetch<UserType>(User.FETCH_USER());
  }

  async fetchUserAnimeList(): Promise<MediaListCollection> {
    if (!this.userId) throw { error: "User must be authenticated." };

    return await this.fetch<MediaListCollection>(
      User.USER_ANIME_LIST(this.userId)
    );
  }

  async fetchUserMangaList(): Promise<MediaListCollection> {
    if (!this.userId) throw { error: "User must be authenticated." };

    return await this.fetch<MediaListCollection>(
      User.USER_MANGA_LIST(this.userId)
    );
  }

  async searchAnime(
    search: Scalars["String"],
    pagination: QueryPageArgs,
    status?: MediaStatus,
    seasonYear?: SeasonYear,
    genres?: Scalars["String"][]
  ): Promise<MediaListCollection> {
    return await this.fetch<MediaListCollection>(
      Media.SearchMedia.SEARCH_ANIME({
        search,
        pagination,
        status,
        seasonYear,
        genres,
      })
    );
  }

  async searchManga(
    search: Scalars["String"],
    pagination: QueryPageArgs,
    status?: MediaStatus,
    seasonYear?: SeasonYear,
    genres?: Scalars["String"][]
  ): Promise<MediaListCollection> {
    return await this.fetch<MediaListCollection>(
      Media.SearchMedia.SEARCH_MANGA({
        search,
        pagination,
        status,
        seasonYear,
        genres,
      })
    );
  }

  async animeDetails(id: Scalars["Int"]): Promise<MediaType> {
    return await this.fetch<MediaType>(Media.MediaDetails.ANIME_DETAILS(id));
  }

  async mangaDetails(id: Scalars["Int"]): Promise<MediaType> {
    return await this.fetch<MediaType>(Media.MediaDetails.MANGA_DETAILS(id));
  }
}