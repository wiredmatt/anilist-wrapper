"use strict";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  User as UserQueries,
  Media as MediaQueries,
  Character as CharacterQueries,
} from "../queries";
import { Media as MediaMutations } from "../mutations";
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
  MutationSaveMediaListEntryArgs,
  MediaList,
} from "../types";

import { extend } from "../utils";

export class Client {
  readonly accessToken?: string;

  readonly headers: headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  readonly userId?: Scalars["Int"];

  animeLists?: MediaListCollection;

  mangaLists?: MediaListCollection;

  userData?: UserType;

  constructor(accessToken?: string) {
    this.userData = {} as UserType;
    if (accessToken) {
      const decoded = jwtDecode(accessToken);
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
        else if (r.Character) return r.Character;
        else if (r.MediaListCollection) return r.MediaListCollection;
        else if (r.SaveMediaListEntry) return r.SaveMediaListEntry.id;
        else if (r.DeleteMediaListEntry) return r.DeleteMediaListEntry.deleted;
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

    await this.fetch<UserType>(UserQueries.FETCH_USER())
      .then((user) => {
        this.userData = user;
      })
      .catch((err) => {
        throw err;
      });

    return this.userData!;
  }

  async fetchUserAnimeList(): Promise<MediaListCollection> {
    if (!this.userId) throw { error: "User must be authenticated." };

    await this.fetch<MediaListCollection>(
      UserQueries.USER_ANIME_LIST(this.userId)
    )
      .then((lists) => {
        this.animeLists = lists;
      })
      .catch((err) => {
        throw err;
      });

    return this.animeLists!;
  }

  async fetchUserMangaList(): Promise<MediaListCollection> {
    if (!this.userId) throw { error: "User must be authenticated." };

    await this.fetch<MediaListCollection>(
      UserQueries.USER_MANGA_LIST(this.userId)
    )
      .then((lists) => {
        this.mangaLists = lists;
      })
      .catch((err) => {
        throw err;
      });

    return this.mangaLists!;
  }

  async searchAnime(
    search: Scalars["String"],
    pagination: QueryPageArgs,
    status?: MediaStatus,
    seasonYear?: SeasonYear,
    genres?: Scalars["String"][]
  ): Promise<MediaType[]> {
    return await this.fetch<MediaType[]>(
      MediaQueries.SearchMedia.SEARCH_ANIME({
        search,
        page: pagination.page,
        perPage: pagination.perPage,
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
      MediaQueries.SearchMedia.SEARCH_MANGA({
        search,
        page: pagination.page,
        perPage: pagination.perPage,
        status,
        seasonYear,
        genres,
      })
    );
  }

  async animeDetails(anime: MediaType): Promise<MediaType> {
    const details = await this.fetch<MediaType>(
      MediaQueries.MediaDetails.ANIME_DETAILS(anime.id)
    ).catch((err) => {
      throw err;
    });

    return extend(details, anime);
  }

  async mangaDetails(manga: MediaType): Promise<MediaType> {
    const details = await this.fetch<MediaType>(
      MediaQueries.MediaDetails.MANGA_DETAILS(manga.id)
    ).catch((err) => {
      throw err;
    });
    return extend(details, manga);
  }

  async searchCharacter(
    search: Scalars["String"],
    pagination: QueryPageArgs
  ): Promise<CharacterType[]> {
    return await this.fetch<CharacterType[]>(
      CharacterQueries.SEARCH_CHARACTERS(search, pagination)
    );
  }

  async characterDetails(character: CharacterType): Promise<CharacterType> {
    const details = await this.fetch<CharacterType>(
      CharacterQueries.CHARACTER_DETAILS(character.id)
    ).catch((err) => {
      throw err;
    });
    return extend(details, character);
  }

  async updateEntry(
    Args: MutationSaveMediaListEntryArgs
  ): Promise<MediaList> {
    const response = await this.fetch<MediaList>(
      MediaMutations.UPDATE_ENTRY(Args)
    ).catch((err) => {
      throw err;
    });

    return response;
  }

  async deleteEntry(
    entryId: number
  ): Promise<Boolean> {
    const response = await this.fetch<Boolean>(
      MediaMutations.DELETE_ENTRY(entryId)
    ).catch((err) => {
      throw err;
    });

    return response;
  }
}
