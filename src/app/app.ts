import express from "express";
import { authRouter } from "../router/authRoutes/auth.routes";
import { userRouter } from "../router/userRotes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ server: "Server is running" });
});
export { app };
