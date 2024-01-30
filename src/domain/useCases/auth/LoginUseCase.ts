import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../database/client";
import * as UseCaseInterfaces from "./abstractions/ILoginUseCase";
class LoginUseCaseImpl implements UseCaseInterfaces.ILoginUseCase {
  async generateUserToken({
    userId,
  }: UseCaseInterfaces.GenerateUserTokenRequest): Promise<string> {
    try {
      return jwt.sign(userId, process.env.JWT_SECRET as string);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async getUserByEmail({
    userEmail,
  }: UseCaseInterfaces.GetUserByEmailRequest): Promise<UseCaseInterfaces.GetUserByEmailResponse> {
    try {
      return await prisma.user.findUnique({
        where: { email: userEmail },
      });
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async decryptUserPassword({
    sentPassword,
    userStoredPassword,
  }: UseCaseInterfaces.CheckForUserCorrectPasswordRequest): Promise<Boolean> {
    try {
      return await bcrypt.compare(sentPassword, userStoredPassword);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async execute({
    email,
    password,
  }: UseCaseInterfaces.LoginUseCaseRequest): Promise<UseCaseInterfaces.LoginUseCaseResponse> {
    try {
      const user = await this.getUserByEmail({ userEmail: email });
      if (user !== null) {
        try {
          const checkForUserCorrectPassword = await this.decryptUserPassword({
            sentPassword: password,
            userStoredPassword: user.password,
          });
          if (checkForUserCorrectPassword === true) {
            const token = await this.generateUserToken({ userId: user.id });

            const loggedUser = await prisma.user.update({
              where: { id: user.id },
              data: {
                jwtToken: token,
              },
            });

            return {
              auth: { token },
              user: {
                name: loggedUser.name,
                email: loggedUser.email,
                id: loggedUser.id,
                phone: loggedUser.phone,
              },
            };
          } else {
            throw new Error("Uma senha incorreta foi informada");
          }
        } catch (err) {
          throw new Error(
            "Ocorreu um erro durante a consulta das credenciais enviadas para o login deste usuário"
          );
        }
      } else {
        throw new Error("Não foi encontrado um usuário com o e-mail inserido");
      }
    } catch (err: any) {
      throw new Error(
        `Ocorreu um erro durante a consulta por dados relacionados ao login informado. ${err.message}`
      );
    }
  }
}

function LoginUseCase() {
  return new LoginUseCaseImpl();
}

export { LoginUseCase };
