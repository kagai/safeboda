import { DbAddRide } from '@data/usecases/add-ride/add-ride'
import { MongoRideRepository } from '@infra/db/mongodb/ride/mongo-ride-repository'

export const makeDbAddRide = (): DbAddRide => {
  const mongoRideRepository = new MongoRideRepository()
  return new DbAddRide(mongoRideRepository)
}
