export function SEARCH_CHARACTERS(
  search: string,
  page: number,
  perPage: number
) {
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
