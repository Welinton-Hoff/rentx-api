import { container } from "tsyringe";
import { Request, Response } from "express";

import { RentalByUserUseCase } from "./RentalByUserUseCase";

class RentalByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const rentalByUserUseCase = container.resolve(RentalByUserUseCase);

    const rentals = await rentalByUserUseCase.execute(id);

    return response.status(201).json(rentals);
  }
}

export { RentalByUserController };
