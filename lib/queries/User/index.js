"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MANGA_LIST = exports.USER_ANIME_LIST = exports.FETCH_USER = void 0;
function FETCH_USER() {
    return {
        query: `
    {
      Viewer{
        id
        name
        avatar{
          large
        }
        bannerImage
        options{
          displayAdultContent
        }
        mediaListOptions{
          scoreFormat
        }
        statistics{
          anime{
            count
            meanScore
            minutesWatched
            episodesWatched
          }
          manga{
            count
            meanScore
            chaptersRead
            volumesRead
          }
        }
      }
    }
  `,
        variables: {},
    };
}
exports.FETCH_USER = FETCH_USER;
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
            userId
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
            userId
        },
    };
}
exports.USER_MANGA_LIST = USER_MANGA_LIST;
//# sourceMappingURL=index.js.map