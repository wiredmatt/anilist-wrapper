require("dotenv").config();
import { Client } from "./src";
import { MediaListGroup, MediaListStatus } from "./src/types";

async function fn() {
  const AniListClient = new Client(process.env.TOKEN);

  let lists: MediaListGroup[] = [];
  let [
    animeWatching,
    animeCompleted,
    animeDropped,
    animePaused,
    mangaReading,
    mangaCompleted,
    mangaDropped,
    mangaPaused,
  ] = lists;

  await AniListClient.fetchUserAnimeList()
    .then((collection) => {
      collection.lists!.map((l) => {
        if (l.status === MediaListStatus.Current) {
          animeWatching = l;
        } else if (l.status === MediaListStatus.Completed) {
          animeCompleted = l;
        } else if (l.status === MediaListStatus.Dropped) {
          animeDropped = l;
        } else if (l.status === MediaListStatus.Paused) {
          animePaused = l;
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

fn();
