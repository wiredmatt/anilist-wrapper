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

//Public usage of the API
const AniListClient = new Client();

//With a token:
const AuthedAniListClient = new Client("your_access_token");

```
###Fetching the animes that the user is currently watching.

```js

```

###Getting the ID of the authorized user

```js

```

# License

[MIT](https://github.com/system32uwu/anilist-wraper/blob/main/LICENSE.md)
