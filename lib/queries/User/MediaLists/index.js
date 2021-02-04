"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MANGA_LIST = exports.USER_ANIME_LIST = void 0;
function USER_ANIME_LIST(userId) {
    return {
        query: `
    query($userId: Int){
        MediaListCollection(userId: $userId, type: ANIME) {
          lists {
            status
            entries {
              id
              mediaId
              status
              score
              progress
              repeat
              media {
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
                genres
                bannerImage
                trailer {
                  site,
                  id,
                  thumbnail
                }
                startDate {
                  year
                  month
                  day
                }
              }
            }
          }
        }
      }
    `,
        variables: {
            userId,
        },
    };
}
exports.USER_ANIME_LIST = USER_ANIME_LIST;
function USER_MANGA_LIST(userId) {
    return {
        query: `
      query($userId: Int){
          MediaListCollection(userId: $userId, type: MANGA) {
            lists {
              status
              entries {
                id
                mediaId
                status
                score
                progress
                repeat
                media {
                  title {
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                  }
                  format
                  status(version: 2)
                  episodes
                  averageScore
                  isAdult
                  genres
                  bannerImage
                  trailer {
                    site
                    id
                    thumbnail
                  }
                  startDate {
                    year
                    month
                    day
                  }
                }
              }
            }
          }
        }
        
      `,
        variables: {
            userId,
        },
    };
}
exports.USER_MANGA_LIST = USER_MANGA_LIST;
//# sourceMappingURL=index.js.map