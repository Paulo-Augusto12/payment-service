type LoginUseCaseRequest = {
  email: string;
  password: string;
};

type LoginUseCaseResponse = {
  user: {
    name: string;
    availableBalance: number;
    toBeReceived: number;
    phone: string;
  };
  auth: { token: string };
};
export interface ILoginUseCase {
  execute(params: LoginUseCaseRequest): Promise<LoginUseCaseResponse>;
}
