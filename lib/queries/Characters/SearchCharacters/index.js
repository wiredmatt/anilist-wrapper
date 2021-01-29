"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_CHARACTERS = void 0;
function SEARCH_CHARACTERS(search, page, perPage) {
    return {
        query: `
        query ($search: String, $page: Int, $perPage: Int) {
            Page(page: $page, perPage: $perPage) {
              characters(search: $search) {
                id
                name {
                  full
                }
                image {
                  large
                }
                media{
                  nodes{
                    id
                    title {
                      userPreferred
                    }
                    format
                    type
                    status
                    season
                    seasonYear
                  }
                }
              }
            }
          }
          
        `,
        variables: {
            search,
            page,
            perPage,
        },
    };
}
exports.SEARCH_CHARACTERS = SEARCH_CHARACTERS;
//# sourceMappingURL=index.js.map