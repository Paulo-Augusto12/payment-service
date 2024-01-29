import bcrypt from "bcrypt";
import { prisma } from "../../../database/client";

class SignUpUseCaseImpl implements ISignUpUseCase {
  async execute({
    email,
    password,
    phone,
    name,
  }: SignUpRequest): Promise<{ name: string; email: string }> {
    try {
      const encriptedPassword = await bcrypt.hash(password, 10);
      const data = await prisma.user.create({
        data: {
          email,
          name,
          password: encriptedPassword,
          availableBalance: 0.0,
          toBeReceived: 0.0,
          phone: phone || null,
        },
      });
      return { email: data.email, name: data.name };
    } catch (err: any) {
      if (err.code === "P2002") {
        throw new Error("Este e-mail já foi cadastrado no banco de dados");
      }
      throw new Error(err);
    }
  }
}

function SignUpUseCase() {
  return new SignUpUseCaseImpl();
}

export { SignUpUseCase };
