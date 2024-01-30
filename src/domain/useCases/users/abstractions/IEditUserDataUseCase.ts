export type EditUserDataRequest = {
  userId: string;
  editedFields: {
    email: string;
    name: string;
    phone: string;
  };
};

export type EditUserDataResponse = {}
export interface IEditUserDataUseCase {
  execute(params: EditUserDataRequest): Promise<{}>;
}
