import { headers, Scalars, QueryObject, User as UserType, MediaListCollection, QueryPageArgs, MediaStatus, SeasonYear, Media as MediaType, Character as CharacterType } from "../types";
export declare class Client {
    readonly accessToken?: string;
    readonly headers: headers;
    readonly userId?: Scalars["Int"];
    constructor(accessToken?: string);
    fetch<T>(queryObj: QueryObject): Promise<T>;
    fetchUser(): Promise<UserType>;
    fetchUserAnimeList(): Promise<MediaListCollection>;
    fetchUserMangaList(): Promise<MediaListCollection>;
    searchAnime(search: Scalars["String"], pagination: QueryPageArgs, status?: MediaStatus, seasonYear?: SeasonYear, genres?: Scalars["String"][]): Promise<MediaType[]>;
    searchManga(search: Scalars["String"], pagination: QueryPageArgs, status?: MediaStatus, seasonYear?: SeasonYear, genres?: Scalars["String"][]): Promise<MediaType[]>;
    animeDetails(anime: MediaType): Promise<MediaType>;
    mangaDetails(manga: MediaType): Promise<MediaType>;
    searchCharacter(search: Scalars["String"], pagination: QueryPageArgs): Promise<CharacterType[]>;
    characterDetails(character: CharacterType): Promise<CharacterType>;
}
//# sourceMappingURL=index.d.ts.map