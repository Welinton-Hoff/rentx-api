import { User } from "../infra/typeorm/entities/User";
import { ICreateUsersDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(data: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository };
