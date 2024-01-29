import dotenv from "dotenv";
import express from "express";
import { router } from "./router/router";
dotenv.config();

const app = express();
app.use(express.json());
app.use(router);
app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running 🤘");
  console.log(`http://localhost:${process.env.PORT || 3030}`);
});
