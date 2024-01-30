import { prisma } from "../../../database/client";
import {
  ConsultUserDataRequest,
  ConsultUserDataResponse,
  IConsultUserDataUseCase,
} from "./abstractions/IConsultUserDataUseCase";

class ConsultUserDataUseCaseImpl implements IConsultUserDataUseCase {
  async execute({
    id,
  }: ConsultUserDataRequest): Promise<ConsultUserDataResponse> {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      if (user) {
        return {
          email: user.email,
          id: user.id,
          joinedAt: user.joinedAt,
          name: user.name,
          phone: user.phone,
        };
      } else {
        throw new Error("Não foi encontrado um usuário com o id selecionado");
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

function ConsultUserDataUseCase() {
  return new ConsultUserDataUseCaseImpl();
}

export { ConsultUserDataUseCase };
