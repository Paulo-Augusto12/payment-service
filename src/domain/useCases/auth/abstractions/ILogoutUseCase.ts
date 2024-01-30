export type LogoutUseCaseRequest = {
  userId: string;
};
export interface ILogoutUseCase {
  execute(params: LogoutUseCaseRequest): Promise<void>;
}
