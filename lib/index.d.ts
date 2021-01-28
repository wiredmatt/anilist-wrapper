import * as types from "./types";
interface headers {
    Accept: string;
    "Content-Type": string;
    Authorization?: string;
}
export declare class Client {
    readonly accessToken?: string;
    readonly headers: headers;
    readonly userId?: types.Scalars["Int"];
    constructor(accessToken?: string);
    fetch<T>(queryObj: types.QueryObject): Promise<T>;
    fetchUser(): Promise<types.User>;
    fetchUserAnimeList(): Promise<types.MediaListCollection>;
    fetchUserMangaList(): Promise<types.MediaListCollection>;
    searchAnime(search: types.Scalars["String"], pagination: types.QueryPageArgs, status?: types.MediaStatus, seasonYear?: types.SeasonYear, genres?: types.Scalars["String"][]): Promise<types.MediaListCollection>;
    searchManga(search: types.Scalars["String"], pagination: types.QueryPageArgs, status?: types.MediaStatus, seasonYear?: types.SeasonYear, genres?: types.Scalars["String"][]): Promise<types.MediaListCollection>;
    animeDetails(id: types.Scalars["Int"]): Promise<types.Media>;
    mangaDetails(id: types.Scalars["Int"]): Promise<types.Media>;
}
export {};
//# sourceMappingURL=index.d.ts.map