import { QueryPageArgs } from "../../../types";

export function SEARCH_CHARACTERS(search: string, pagination: QueryPageArgs) {
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
      pagination,
    },
  };
}
