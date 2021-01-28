import { USER_MEDIA_LIST_ARGS } from "../../types";

export function FETCH_USER() {
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
    variables:{},
  };
}
export function USER_ANIME_LIST(userId: number) {
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
    variables:{
      userId
    },
  };
}

export function USER_MANGA_LIST(userId: number) {
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
    variables:{
      userId
    },
  };
}
