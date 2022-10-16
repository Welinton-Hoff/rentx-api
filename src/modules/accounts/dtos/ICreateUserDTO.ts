interface ICreateUsersDTO {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  password: string;
  driver_license: string;
}

export { ICreateUsersDTO };
