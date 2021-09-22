import { DbLoadRide } from '@data/usecases/load-rides/load-rides'
import { LoadRides } from '@domain/usecases/load-rides'
import { MongoRideRepository } from '@infra/db/mongodb/ride/mongo-ride-repository'

export const makeDbLoadRides = (): LoadRides => {
  const mongoRideRepository = new MongoRideRepository()
  return new DbLoadRide(mongoRideRepository)
}
