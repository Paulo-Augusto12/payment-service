import { Router } from "express";
import { LoginUseCase } from "../../domain/useCases/auth/LoginUseCase";
import { SignUpUseCase } from "../../domain/useCases/auth/SignUpUseCase";
import { LoginUseCaseRequest } from "../../domain/useCases/auth/abstractions/ILoginUseCase";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const { email, password }: LoginUseCaseRequest = req.body;
  const loginUseCase = LoginUseCase();
  try {
    const response = await loginUseCase.execute({ email, password });
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(req.body)
    return res.status(401).json({ error: err.message });
  }
});

authRouter.post("/signup", async (req, res) => {
  const { email, name, password, phone }: SignUpRequest = req.body;
  try {
    const signupUseCase = SignUpUseCase();
    const response = await signupUseCase.execute({ email, name, password, phone });
    return res.status(201).json({ created: response });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export { authRouter };
