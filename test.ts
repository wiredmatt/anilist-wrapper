require("dotenv").config();
import { Client } from "./src";

async function fn() {
  console.log("function ejecutada");

  const AnilistClient = new Client(process.env.TOKEN);

  await AnilistClient.fetchUser()
    .then((x) => x)
    .catch((err) => console.log(err));

  console.log(JSON.stringify(AnilistClient.userData));

  await AnilistClient.fetchUserAnimeList()
    .then((x) => x)
    .catch((err) => console.log(err));

  console.log(JSON.stringify(AnilistClient.animeLists!.lists![0]));
}

fn();
