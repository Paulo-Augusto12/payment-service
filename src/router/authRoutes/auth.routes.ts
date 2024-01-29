import { Router } from "express";
import { SignUpUseCase } from "../../domain/useCases/auth/SignUpUseCase";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {});

authRouter.post("/signup", async (req, res) => {
  const body: SignUpRequest = req.body;
  try {
    const { execute } = SignUpUseCase();
    const response = await execute(body);
    return res.status(201).json({ created: response });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

export { authRouter };
