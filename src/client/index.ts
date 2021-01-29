"use strict";
import axios from "axios";
import jsonwebtoken from "jsonwebtoken";
import { User, Media, Character } from "../queries";
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
  Character as CharacterType,
} from "../types";

import { extend } from "../utils";


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
        if (r.Media) return r.Media;
        else if (r.Viewer) return r.Viewer;
        else if (r.MediaListCollection) return r.MediaListCollection;
        else if (r.Page) {
          if (r.Page.characters) return r.Page.characters;
          else if (r.Page.media) return r.Page.media;
        } 
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
  ): Promise<MediaType[]> {
    return await this.fetch<MediaType[]>(
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
  ): Promise<MediaType[]> {
    return await this.fetch<MediaType[]>(
      Media.SearchMedia.SEARCH_MANGA({
        search,
        pagination,
        status,
        seasonYear,
        genres,
      })
    );
  }

  async animeDetails(anime: MediaType): Promise<MediaType> {
    const details = await this.fetch<MediaType>(Media.MediaDetails.ANIME_DETAILS(anime.id));
    return extend(details,anime);
  }

  async mangaDetails(manga: MediaType): Promise<MediaType> {
    const details = await this.fetch<MediaType>(Media.MediaDetails.MANGA_DETAILS(manga.id));
    return extend(details,manga)
  }

  async searchCharacter(
    search: Scalars["String"],
    pagination: QueryPageArgs
  ): Promise<CharacterType[]> {
    return await this.fetch<CharacterType[]>(
      Character.SEARCH_CHARACTERS(search, pagination)
    );
  }

  async characterDetails(id: number): Promise<CharacterType> {
    return await this.fetch<CharacterType>(Character.CHARACTER_DETAILS(id));
  }
}
