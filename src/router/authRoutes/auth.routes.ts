import { Router } from "express";
import { SignUpUseCase } from "../../domain/useCases/auth/SignUpUseCase";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {});

authRouter.post("/signup", async (req, res) => {
  const { email, name, password, phone }: SignUpRequest = req.body;
  try {
    const { execute } = SignUpUseCase();
    const response = await execute({email, name, password, phone});
    return res.status(201).json({ created: response });
  } catch (err: any) {
    return res.status(400).json({error: err.message});
  }
});

export { authRouter };
