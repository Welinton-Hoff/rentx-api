import { inject, injectable } from "tsyringe";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rentalt";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

interface IRequest {
  total: number;
  car_id: string;
  user_id: string;
  end_date: string;
  start_date: string;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository
  ) {}

  async execute(data: IRequest): Promise<Rental> {
    const rental = await this.rentalsRepository.create(data);

    return rental;
  }
}

export { CreateRentalUseCase };
