import { prisma } from "../../../database/client";
import {
  ILogoutUseCase,
  LogoutUseCaseRequest,
} from "./abstractions/ILogoutUseCase";
class LogoutUseCaseImpl implements ILogoutUseCase {
  async execute(params: LogoutUseCaseRequest): Promise<void> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: params.userId },
      });
      if (user) {
        const data = await prisma.user.update({
          where: { id: params.userId },
          data: { jwtToken: null },
        });
        console.log(data);
      } else {
        throw new Error("Não foi encontrado um usuário com o id informado");
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

function LogoutUseCase() {
  return new LogoutUseCaseImpl();
}

export { LogoutUseCase };
