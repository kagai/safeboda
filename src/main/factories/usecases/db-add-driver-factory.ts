import { DbAddDriver } from '@data/usecases/add-driver/db-add-driver'
import { MongoDriverRepository } from '@infra/db/mongodb/driver/mongo-driver-repository'

export const makeDbAddDriver = (): DbAddDriver => {
  const mongoDriverRepository = new MongoDriverRepository()
  return new DbAddDriver(mongoDriverRepository)
}
