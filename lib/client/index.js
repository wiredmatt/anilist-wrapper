"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = __importDefault(require("axios"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const queries_1 = require("../queries");
const utils_1 = require("../utils");
class Client {
    constructor(accessToken) {
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        this.userData = {};
        if (accessToken) {
            const decoded = jwt_decode_1.default(accessToken);
            if (decoded) {
                this.accessToken = accessToken;
                this.headers.Authorization = `Bearer ${accessToken}`;
                this.userId = decoded.sub;
            }
        }
    }
    fetch(queryObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query, variables } = queryObj;
            return yield axios_1.default
                .post("https://graphql.anilist.co/", {
                query,
                variables,
            }, {
                headers: this.headers,
            })
                .then((response) => {
                const r = response.data.data;
                if (r.Media)
                    return r.Media;
                else if (r.Viewer)
                    return r.Viewer;
                else if (r.Character)
                    return r.Character;
                else if (r.MediaListCollection)
                    return r.MediaListCollection;
                else if (r.Page) {
                    if (r.Page.characters)
                        return r.Page.characters;
                    else if (r.Page.media)
                        return r.Page.media;
                }
                else
                    return r;
            })
                .catch((err) => {
                throw {
                    error: err.message,
                };
            });
        });
    }
    fetchUser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            yield this.fetch(queries_1.User.FETCH_USER())
                .then((user) => {
                this.userData = user;
            })
                .catch((err) => {
                throw err;
            });
            return this.userData;
        });
    }
    fetchUserAnimeList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            yield this.fetch(queries_1.User.USER_ANIME_LIST(this.userId)).then(lists => {
                this.animeLists = lists;
            }).catch(err => { throw err; });
            return this.animeLists;
        });
    }
    fetchUserMangaList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            yield this.fetch(queries_1.User.USER_MANGA_LIST(this.userId)).then(lists => {
                this.mangaLists = lists;
            }).catch(err => { throw err; });
            return this.mangaLists;
        });
    }
    searchAnime(search, pagination, status, seasonYear, genres) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("pagination is: " + JSON.stringify(pagination));
            return yield this.fetch(queries_1.Media.SearchMedia.SEARCH_ANIME({
                search,
                page: pagination.page,
                perPage: pagination.perPage,
                status,
                seasonYear,
                genres,
            }));
        });
    }
    searchManga(search, pagination, status, seasonYear, genres) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries_1.Media.SearchMedia.SEARCH_MANGA({
                search,
                page: pagination.page,
                perPage: pagination.perPage,
                status,
                seasonYear,
                genres,
            }));
        });
    }
    animeDetails(anime) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = yield this.fetch(queries_1.Media.MediaDetails.ANIME_DETAILS(anime.id)).catch(err => { throw err; });
            return utils_1.extend(details, anime);
        });
    }
    mangaDetails(manga) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = yield this.fetch(queries_1.Media.MediaDetails.MANGA_DETAILS(manga.id)).catch(err => { throw err; });
            return utils_1.extend(details, manga);
        });
    }
    searchCharacter(search, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries_1.Character.SEARCH_CHARACTERS(search, pagination));
        });
    }
    characterDetails(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = yield this.fetch(queries_1.Character.CHARACTER_DETAILS(character.id)).catch(err => { throw err; });
            return utils_1.extend(details, character);
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map