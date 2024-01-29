type SignUpRequest = {
  password: string;
  email: string;
  phone?: string;
  name: string;
};

interface ISignUpUseCase {
  execute(params: SignUpRequest): Promise<{ name: string; email: string }>;
}
