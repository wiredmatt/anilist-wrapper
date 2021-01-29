export function ANIME_DETAILS(id: number) {
  return {
    query: `
      query ($id: Int) {
        Media(id: $id) {
          description
          duration
          countryOfOrigin
          synonyms
          mediaListEntry{
            id
            status
            score
            progress
          }
          tags {
            id
            name
          }
          nextAiringEpisode {
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
    variables: {
      id,
    },
  };
}

export function MANGA_DETAILS(id: number) {
  return {
    query: `
    query ($id: Int) {
      Media(id: $id) {
        description
        duration
        countryOfOrigin
        synonyms
        mediaListEntry {
          id
          status
          score
          progress
          progressVolumes
        }
        tags {
          id
          name
        }
        nextAiringEpisode {
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
    variables: {
      id,
    },
  };
}
