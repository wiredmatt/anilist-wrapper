import { Client } from "./src";

import { Media } from "./src/types";

const AnilistClient = new Client(process.env.TOKEN);

async function fn() {
  let mediaResult = {} as Media;
  let detailedMedia = {} as Media;

  await AnilistClient.searchAnime("Gintama", {
    page: 1,
    perPage: 10,
  })
    .then(async (animes) => {
      mediaResult = animes[0];
      await AnilistClient.animeDetails(mediaResult)
        .then(async (data) => {
          detailedMedia = data;
          console.log(detailedMedia.id);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

fn();
