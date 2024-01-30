export type ConsultUserDataRequest = {
  id: string;
};

export type ConsultUserDataResponse = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  joinedAt: Date;
};

export interface IConsultUserDataUseCase {
  execute(params: ConsultUserDataRequest): Promise<ConsultUserDataResponse>;
}
