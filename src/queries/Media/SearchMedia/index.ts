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
              thumbnail
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
              thumbnail
            }
          }
        }
      }
        
      `,
    variables,
  };
}

export function ANIME_DETAILS(id: number) {
  return {
    query: `
    query ($id: Int) {
      Media(id: $id) {
        description
        duration
        countryOfOrigin
        synonyms
        tags {
          id
          name
        }
        nextAiringEpisode{
          airingAt
          episode
        }
        characters {
          nodes {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
        studios {
          nodes {
            id
            name
          }
        }
        relations {
          edges {
            relationType
            id
            node {
              title {
                userPreferred
              }
              type
              format
              status
              season
              seasonYear
            }
          }
        }
      }
    }
        
    `,
    variables:{
      id
    },
  };
}


export function MANGA_DETAILS(id: number) {
  return {
    query: `
    query ($id: Int) {
      Media(id: $id) {
        description
        countryOfOrigin
        synonyms
        tags {
          id
          name
        }
        characters {
          nodes {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
        relations {
          edges {
            relationType
            id
            node {
              title {
                userPreferred
              }
              type
              format
              status
              season
              seasonYear
            }
          }
        }
      }
    }
    
    `,
    variables:{
      id
    },
  };
}
