import { Router } from "express";
import { ConsultUserDataUseCase } from "../../domain/useCases/users/ConsultUserDataUseCase";
import { EditUserDataUseCase } from "../../domain/useCases/users/EditUserDataUseCase";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  const interestingUsers = ["Carlos", "Luiz", "Fernando", "Cláudio", "Karine"];
  return res.status(200).json({ interestingUsers });
});

userRouter.get("/consult", async (req, res) => {
  const id = req.userData;
  const consultUseCase = ConsultUserDataUseCase();

  try {
    const response = await consultUseCase.execute({ id });
    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

userRouter.put("/edit", async (req, res) => {
  const id = req.userData;
  const editUserDataUseCase = EditUserDataUseCase();
});
export { userRouter };
