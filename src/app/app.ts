import express from "express";
import { userRouter } from "../router/userRotes/user.routes";

const app = express();

app.use("/users", userRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ server: "Server is running" });
});
export { app };
