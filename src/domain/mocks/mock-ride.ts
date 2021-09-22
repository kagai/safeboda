import { AddRideParams } from '@domain/usecases/add-ride'
import { RideModel } from '../models/ride'

export const fakeRideModel: RideModel = {
  id: 'any_id',
  passangerId: 'any_passanger_id',
  driverId: 'any_driver_id',
  pickUpPoint: {
    type: [70.0, 71.0],
    index: '2d'
  },
  destinationPoint: {
    type: [70.0, 71.0],
    index: '2d'
  },
  rideStatus: 'ongoing'
}

export const fakeRideParams: Omit<AddRideParams, 'id'> = {
  passangerId: 'any_passanger_id',
  driverId: 'any_driver_id',
  pickUpPoint: {
    type: [70.0, 71.0],
    index: '2d'
  },
  destinationPoint: {
    type: [70.0, 71.0],
    index: '2d'
  },
  rideStatus: 'ongoing'
}

export const fakeRideModelArray: RideModel[] = [
  {
    id: 'any_id',
    passangerId: 'any_passanger_id',
    driverId: 'any_driver_id',
    pickUpPoint: {
      type: [70.0, 71.0],
      index: '2d'
    },
    destinationPoint: {
      type: [70.0, 71.0],
      index: '2d'
    },
    rideStatus: 'ongoing'
  },
  {
    id: 'any_id',
    passangerId: 'any_passanger_id',
    driverId: 'any_driver_id',
    pickUpPoint: {
      type: [70.0, 71.0],
      index: '2d'
    },
    destinationPoint: {
      type: [70.0, 71.0],
      index: '2d'
    },
    rideStatus: 'ongoing'
  }
]
