# anilist-wrapper

> A wrapper for the AniList API

![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
<a href="https://github.com/system32uwu/anilist-wrapper/graphs/commit-activity">
<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />

# Install

```bash
npm i anilist-wrapper
```

or

```bash
yarn add anilist-wrapper
```

# Usage

```js
import { Client } from "anilist-wrapper";

//Public usage of the API (only queries)
const AniListClient = new Client();

//Private usage of the API (mutations and queries regarding user's data)
const AuthedAniListClient = new Client("your_access_token");
```

### Getting personal information and stats of the authenticated user

```js
AnilistClient.fetchUser()
  .then((user) => console.log(JSON.stringify(user)))
  .catch((err) => console.log(err));
```

### Fetching the anime and manga lists of the authenticated user

```js
import { MediaListGroup, MediaListStatus } from "anilist-wrapper";

let lists: MediaListGroup[] = [];
let [animeWatching, animeCompleted, animeDropped, animePaused,
    mangaReading, mangaCompleted, mangaDropped, mangaPaused] = lists;

AnilistClient.fetchUserAnimeList()
  .then((collection) => {
    collection.lists!.map((l) => {
      if (l.status === MediaListStatus.Current) {
        animeWatching = l;
      }
      else if (l.status === MediaListStatus.Completed) {
        animeCompleted = l;
      }
      else if (l.status === MediaListStatus.Dropped) {
        animeDropped = l;
      }
      else if (l.status === MediaListStatus.Paused) {
        animePaused = l;
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

  AnilistClient.fetchUserMangaList()
  .then((collection) => {
    collection.lists!.map((l) => {
      if (l.status === MediaListStatus.Current) {
        mangaReading = l;
      }
      else if (l.status === MediaListStatus.Completed) {
        mangaCompleted = l;
      }
      else if (l.status === MediaListStatus.Dropped) {
        mangaDropped = l;
      }
      else if (l.status === MediaListStatus.Paused) {
        mangaPaused = l;
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

```
### Searching anime and manga

```js
AnilistClient.searchAnime("Gintama", {
  page: 1,
  perPage: 10,
})
  .then((data) => console.log(JSON.stringify(data)))
  .catch((err) => console.log(err));

AnilistClient.searchManga("Gintama", {
  page: 1,
  perPage: 10,
})
  .then((data) => console.log(JSON.stringify(data)))
  .catch((err) => console.log(err));

```

### Getting more details of anime and manga (excludes previously returned data from the previously documented .search<Media> function)

```js
AnilistClient.animeDetails(97940)
  .then((details) => console.log(JSON.stringify(details)))
  .catch((err) => console.log(err));

AnilistClient.mangaDetails(53390)
  .then((details) => console.log(JSON.stringify(details)))
  .catch((err) => console.log(err));
  
```

### Making your own custom function

```js

import { SomeType } from "anilist-wrapper";

AnilistClient.fetch<SomeType>({query: `your query`, variables: {
  somevariable,
  anothervariable
}}).then(...).catch(...)
  
```

# NOTE

This package only includes queries at the moment, next versions will include mutations also.

# License

[MIT](https://github.com/system32uwu/anilist-wrapper/blob/main/LICENSE.md)
