import express from "express";
import { userRouter } from "../router/user.routes";

const app = express();

app.use("/users", userRouter);


export { app };
