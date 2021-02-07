require("dotenv").config();
import { Client } from "./src";
import { MediaListGroup, MediaListStatus } from "./src/types";

async function fn() {
  const AniListClient = new Client(process.env.TOKEN);

  await AniListClient.searchAnime("gintama", {
    page: 1,
    perPage: 2,
  }).then((data) => console.log(data.length))
}

fn();
