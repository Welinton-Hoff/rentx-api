import { container } from "tsyringe";
import { Request, Response } from "express";
import { SyncPullCarsCase } from "./SyncPullCarsCase";

class SyncPullCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { lastPulledVersion } = request.query;

    const syncPullCarsCase = container.resolve(SyncPullCarsCase);
    const cars = await syncPullCarsCase.execute(Number(lastPulledVersion));
    console.log(cars);

    return response.status(200).json({
      latestVersion: new Date().getTime(),
      changes: {
        cars,
      },
    });
  }
}

export { SyncPullCarsController };
