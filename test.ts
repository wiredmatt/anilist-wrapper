import { Client } from "./src";

const x = new Client();

// x.searchCharacter("gintoki", {
//   page: 1,
//   perPage: 3,
// })
//   .then((data) => console.log(JSON.stringify(data)))
//   .catch((err) => console.log(err));
x.searchAnime("gintama", {
  page: 1,
  perPage: 3,
})
  .then((data) => console.log(JSON.stringify(data)))
  .catch((err) => console.log(err));
