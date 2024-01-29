import express from "express";
import { userRouter } from "../user.routes";

const app = express();

app.use("/users", userRouter);


export { app }