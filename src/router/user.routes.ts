import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  const interestingUsers = ["Carlos", "Luiz", "Fernando", "Cláudio", "Karine"];
  return res.status(200).json({ interestingUsers });
});
export { userRouter };
