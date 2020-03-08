const express = require("express");

const app = express();
const APP_ID = process.env.APP_ID;
const PORT = process.env.PORT || 5000;

if (!APP_ID) {
  console.error("You must set APP_ID Environment variable");
  process.exit(1);
}

app.use("*", (_, res) => res.send(`This is app: ${APP_ID}`));

app.listen(PORT, () => console.log(`App ${APP_ID} => Up and running on ${PORT}`));

