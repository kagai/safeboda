import { ObjectId } from 'mongodb'
import { LoadRideById } from '@domain/usecases/load-ride-by-id'
import { StopRide } from '@data/interfaces/db/ride/stop-ride'
import { forbidden, serverError, ok } from '@presentation/helpers/http/http'
import { InvalidParamError, InvalidMongoIDError } from '@presentation/errors'
import { Controller, HttpResponse } from '@presentation/interfaces'

export class StopRideController implements Controller {
  constructor(
    private readonly loadRideById: LoadRideById,
    private readonly StopRide: StopRide
  ) { }

  async handle(request: StopRideController.Request): Promise<HttpResponse> {
    try {
      const { rideId } = request
      if (!ObjectId.isValid(rideId)) return forbidden(new InvalidMongoIDError(rideId))
      const ride = await this.loadRideById.loadById(rideId)
      if (!ride) return forbidden(new InvalidParamError('rideId'))
      await this.StopRide.stop(rideId)
      return ok(ride)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace StopRideController {
  export interface Request {
    rideId: string
  }
}
