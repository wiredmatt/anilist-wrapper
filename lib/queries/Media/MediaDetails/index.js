"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MANGA_DETAILS = exports.ANIME_DETAILS = void 0;
function ANIME_DETAILS(id) {
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
exports.ANIME_DETAILS = ANIME_DETAILS;
function MANGA_DETAILS(id) {
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
exports.MANGA_DETAILS = MANGA_DETAILS;
//# sourceMappingURL=index.js.map