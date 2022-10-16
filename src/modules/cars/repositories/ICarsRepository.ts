import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  listAll(): Promise<Car[]>;
  findById(id: string): Promise<Car>;
  listByCreated(date: number): Promise<Car[]>;
  listByUpdated(date: number): Promise<Car[]>;
}

export { ICarsRepository };
