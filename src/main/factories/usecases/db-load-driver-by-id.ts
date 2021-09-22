import { DbLoadDriverById } from '@data/usecases/add-driver/load-driver-by-id'
import { LoadDriverById } from '@domain/usecases/load-driver'
import { MongoDriverRepository } from '@infra/db/mongodb/driver/mongo-driver-repository'

export const makeDbLoadDriverById = (): LoadDriverById => {
  const mongoDriverRepository = new MongoDriverRepository()
  return new DbLoadDriverById(mongoDriverRepository)
}
