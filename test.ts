import { Client } from "./src";

import { Character, Media } from "./src/types";

const AnilistClient = new Client(process.env.TOKEN);

async function fn() {
  let characterResult = {} as Character;
  let detailedCharacter = {} as Character;

  await AnilistClient.searchCharacter("Gintoki", {
    page: 1,
    perPage: 10,
  })
    .then(async (characters) => {
      characterResult = characters[0];
      await AnilistClient.characterDetails(characterResult)
        .then(async (data) => {
          detailedCharacter = data;
          console.log(JSON.stringify(detailedCharacter));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

fn();
