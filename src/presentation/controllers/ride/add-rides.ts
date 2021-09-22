import { RideOngoingError } from './../../errors/ride-ongoing'
import { LoadRideByDriverId } from './../../../domain/usecases/load-ride-by-driver-id'
// import { LoadRideByPassangerId } from './../../../domain/usecases/load-ride-by-passanger-id'
import { ObjectId } from 'mongodb'
import { AddRide } from '@domain/usecases/add-ride'
import { badRequest, forbidden, ok, serverError } from '@presentation/helpers/http/http'
import { Controller, HttpResponse, Validation } from '@presentation/interfaces'

export class AddRideController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addRide: AddRide,
    private readonly loadRideByDriverId: LoadRideByDriverId
    // private readonly loadRideByPassangerId: LoadRideByPassangerId
  ) {}

  async handle(request: AddRideController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      const { driverId } = request
      if (error) return badRequest(error)

      const rideByDriverId = await this.loadRideByDriverId.check(driverId)
      // const rideByPassangerId = await this.loadRideByPassangerId.check(driverId)
      if (rideByDriverId) return forbidden(new RideOngoingError())

      const ride = await this.addRide.add({
        passangerId: request.passangerId,
        driverId: request.driverId,
        pickUpPoint: request.pickUpPoint,
        destinationPoint: request.destinationPoint,
        rideStatus: 'ongoing'
      })
      return ok(ride)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddRideController {
  export interface Request {
    passangerId: ObjectId
    driverId: ObjectId
    pickUpPoint: {
      type: [Number, Number]
      index: '2d'
    }
    destinationPoint: {
      type: [Number, Number]
      index: '2d'
    }
  }
}
