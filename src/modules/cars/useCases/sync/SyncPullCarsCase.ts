import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface ResponseData {
  deleted: [];
  created: Car[];
  updated: Car[];
}

@injectable()
class SyncPullCarsCase {
  constructor(
    @inject("CarsRepository")
    private usersRepository: ICarsRepository
  ) {}

  async execute(lastPulledVersion: number): Promise<ResponseData> {
    const updated = await this.usersRepository.listByUpdated(lastPulledVersion);
    const created = await this.usersRepository.listByCreated(lastPulledVersion);

    return {
      created,
      updated,
      deleted: [],
    };
  }
}

export { SyncPullCarsCase };
