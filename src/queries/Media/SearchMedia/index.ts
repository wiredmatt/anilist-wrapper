import { MEDIA_SEARCH_ARGS } from "../../../types";

export function SEARCH_ANIME(variables: MEDIA_SEARCH_ARGS) {
  return {
    query: `
    query($page: Int, $perPage: Int, $search: String, $status: MediaStatus, $season: MediaSeason, $year: Int, $genres: [String]) {
        Page(page: $page, perPage: $perPage) {
          media(search: $search, type: ANIME, status: $status, season: $season, seasonYear: $year, genre_in: $genres) {
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
            episodes
            averageScore
            isAdult
            bannerImage
            trailer {
              site
              id
            }
            season
            seasonYear
          }
        }
      }
      
    `,
    variables,
  };
}

export function SEARCH_MANGA(variables: MEDIA_SEARCH_ARGS) {
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
            }
          }
        }
      }
        
      `,
    variables,
  };
}
