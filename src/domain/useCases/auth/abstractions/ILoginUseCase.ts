export type LoginUseCaseRequest = {
  email: string;
  password: string;
};

export type GetUserByEmailRequest = {
  userEmail: string;
};

export type CheckForUserCorrectPasswordRequest = {
  sentPassword: string;
  userStoredPassword: string;
};

export type GenerateUserTokenRequest = {
  userId: string
}

export type GetUserByEmailResponse = {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string | null;
  jwtToken: string | null;
  availableBalance: number;
  toBeReceived: number;
  joinedAt: Date;
} | null;

export type LoginUseCaseResponse = {
  user: {
    name: string;
    availableBalance: number;
    toBeReceived: number;
    phone: string | null;
  };
  auth: { token: string };
};
export interface ILoginUseCase {
  getUserByEmail(
    params: GetUserByEmailRequest
  ): Promise<GetUserByEmailResponse>;
  decryptUserPassword(
    params: CheckForUserCorrectPasswordRequest
  ): Promise<Boolean>;
  generateUserToken(params: GenerateUserTokenRequest): Promise<string>
  execute(params: LoginUseCaseRequest): Promise<LoginUseCaseResponse>;
}
