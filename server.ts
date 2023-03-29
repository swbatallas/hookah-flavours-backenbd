import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.NODE_ENV === "DEV" ? process.env.PORT : 4000;
const server = app.listen(port, () => {
  console.log("Server listening on port " + port);
});

module.exports = server