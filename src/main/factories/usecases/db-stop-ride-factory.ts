import { DbStopRideById } from '@data/usecases/stop-ride/db-stop-ride'
import { StopRide } from '@domain/usecases/stop-ride'
import { MongoRideRepository } from '@infra/db/mongodb/ride/mongo-ride-repository'

export const makeDbStopRideById = (): StopRide => {
  const mongoRideRepository = new MongoRideRepository()
  return new DbStopRideById(mongoRideRepository)
}
