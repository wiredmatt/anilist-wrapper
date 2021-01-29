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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const queries_1 = require("../queries");
class Client {
    constructor(accessToken) {
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        if (accessToken) {
            const decoded = jsonwebtoken_1.default.decode(accessToken);
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
                if (r.Page)
                    return r.Page;
                else if (r.Viewer)
                    return r.Viewer;
                else if (r.MediaListCollection)
                    return r.MediaListCollection;
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
            return yield this.fetch(queries_1.User.FETCH_USER());
        });
    }
    fetchUserAnimeList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            return yield this.fetch(queries_1.User.USER_ANIME_LIST(this.userId));
        });
    }
    fetchUserMangaList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            return yield this.fetch(queries_1.User.USER_MANGA_LIST(this.userId));
        });
    }
    searchAnime(search, pagination, status, seasonYear, genres) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries_1.Media.SearchMedia.SEARCH_ANIME({
                search,
                pagination,
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
                pagination,
                status,
                seasonYear,
                genres,
            }));
        });
    }
    animeDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries_1.Media.MediaDetails.ANIME_DETAILS(id));
        });
    }
    mangaDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries_1.Media.MediaDetails.MANGA_DETAILS(id));
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map