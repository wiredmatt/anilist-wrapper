"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_MANGA = exports.SEARCH_ANIME = void 0;
function SEARCH_ANIME(variables) {
    return {
        query: `
    query($page: Int, $perPage: Int, $search: String, $status: MediaStatus, $season: MediaSeason, $year: Int, $genres: [String]) {
        Page(page: $page, perPage: $perPage) {
          media(search: $search, type: ANIME, status: $status, season: $season, seasonYear: $year, genre_in: $genres) {
            id
            genres
            title {
              userPreferred
              english
              native
              romaji
            }
            coverImage {
              extraLarge
            }
            format
            status(version: 2)
            episodes
            averageScore
            isAdult
            bannerImage
            trailer {
              site
              id
              thumbnail
            }
            season
            seasonYear
            mediaListEntry{
              id
            }
          }
        }
      }
      
    `,
        variables,
    };
}
exports.SEARCH_ANIME = SEARCH_ANIME;
function SEARCH_MANGA(variables) {
    return {
        query: `
      query ($page: Int, $perPage: Int, $search: String, $status: MediaStatus, $genres: [String]) {
        Page(page: $page, perPage: $perPage) {
          media(search: $search, type: MANGA, status: $status, genre_in: $genres) {
            id
            genres
            title {
              userPreferred
            }
            coverImage {
              extraLarge
            }
            format
            status(version: 2)
            volumes
            chapters
            averageScore
            isAdult
            bannerImage
            trailer {
              site
              id
              thumbnail
            }
          }
        }
      }
        
      `,
        variables,
    };
}
exports.SEARCH_MANGA = SEARCH_MANGA;
//# sourceMappingURL=index.js.map