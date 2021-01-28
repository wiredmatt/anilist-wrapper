"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.types = exports.Client = void 0;
const axios_1 = __importDefault(require("axios"));
const types = __importStar(require("./types"));
exports.types = types;
const queries = __importStar(require("./queries"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
            return yield this.fetch(queries.User.FETCH_USER());
        });
    }
    fetchUserAnimeList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            return yield this.fetch(queries.User.USER_ANIME_LIST(this.userId));
        });
    }
    fetchUserMangaList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId)
                throw { error: "User must be authenticated." };
            return yield this.fetch(queries.User.USER_MANGA_LIST(this.userId));
        });
    }
    searchAnime(search, pagination, status, seasonYear, genres) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries.Media.SearchMedia.SEARCH_ANIME({
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
            return yield this.fetch(queries.Media.SearchMedia.SEARCH_MANGA({
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
            return yield this.fetch(queries.Media.MediaDetails.ANIME_DETAILS(id));
        });
    }
    mangaDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fetch(queries.Media.MediaDetails.MANGA_DETAILS(id));
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map