import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

class SignUpUseCaseImpl implements ISignUpUseCase {
  constructor(private prisma: PrismaClient) {}
  async execute({
    email,
    password,
    phone,
    name,
  }: SignUpRequest): Promise<{ name: string; email: string }> {
    try {
      const encriptedPassword = await bcrypt.hash(password, 10);
      const data = await this.prisma.user.create({
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
      throw new Error(err);
    }
  }
}

function SignUpUseCase() {
  return new SignUpUseCaseImpl(new PrismaClient());
}

export { SignUpUseCase };
