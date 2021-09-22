import { DbLoadRideById } from '@data/usecases/add-ride/load-ride-by-id'
import { LoadRideById } from '@domain/usecases/load-ride-by-id'
import { MongoRideRepository } from '@infra/db/mongodb/ride/mongo-ride-repository'

export const makeDbLoadRideById = (): LoadRideById => {
  const mongoRideRepository = new MongoRideRepository()
  return new DbLoadRideById(mongoRideRepository)
}
