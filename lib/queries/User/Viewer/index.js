"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FETCH_USER = void 0;
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
//# sourceMappingURL=index.js.map