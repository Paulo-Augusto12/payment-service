import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ serverRunning: "Hello world" });
});
export { router };
