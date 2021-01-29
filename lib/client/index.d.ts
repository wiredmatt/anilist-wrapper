import { headers, Scalars, QueryObject, User as UserType, MediaListCollection, QueryPageArgs, MediaStatus, SeasonYear, Media as MediaType } from "../types";
export declare class Client {
    readonly accessToken?: string;
    readonly headers: headers;
    readonly userId?: Scalars["Int"];
    constructor(accessToken?: string);
    fetch<T>(queryObj: QueryObject): Promise<T>;
    fetchUser(): Promise<UserType>;
    fetchUserAnimeList(): Promise<MediaListCollection>;
    fetchUserMangaList(): Promise<MediaListCollection>;
    searchAnime(search: Scalars["String"], pagination: QueryPageArgs, status?: MediaStatus, seasonYear?: SeasonYear, genres?: Scalars["String"][]): Promise<MediaListCollection>;
    searchManga(search: Scalars["String"], pagination: QueryPageArgs, status?: MediaStatus, seasonYear?: SeasonYear, genres?: Scalars["String"][]): Promise<MediaListCollection>;
    animeDetails(id: Scalars["Int"]): Promise<MediaType>;
    mangaDetails(id: Scalars["Int"]): Promise<MediaType>;
}
//# sourceMappingURL=index.d.ts.map