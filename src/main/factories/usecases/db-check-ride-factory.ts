import { DbCheckRideById } from '@data/usecases/check-ride/check-ride'
import { MongoRideRepository } from '@infra/db/mongodb/ride/mongo-ride-repository'

export const makeDbCheckRide = (): DbCheckRideById => {
  const mongoRideRepository = new MongoRideRepository()
  return new DbCheckRideById(mongoRideRepository)
}
