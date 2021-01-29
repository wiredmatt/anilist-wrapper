    
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
  
  