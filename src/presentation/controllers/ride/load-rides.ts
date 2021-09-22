import { LoadRides } from '@domain/usecases/load-rides'
import { noContent, ok, serverError } from '@presentation/helpers/http/http'
import { Controller, HttpResponse } from '@presentation/interfaces'

export class LoadRidesController implements Controller {
  constructor(private readonly loadRides: LoadRides) {}

  async handle(request: LoadRidesController.Request): Promise<HttpResponse> {
    try {
      const rides = await this.loadRides.load()
      return rides.length ? ok(rides) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadRidesController {
  export interface Request {
    rideStatus?: string
  }
}
