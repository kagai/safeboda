import { DbUnsuspendDriverById } from '@data/usecases/add-driver/db-unsuspend-driver'
import { UnsuspendDriver } from '@domain/usecases/unsuspend-driver'
import { MongoDriverRepository } from '@infra/db/mongodb/driver/mongo-driver-repository'

export const makeDbUnsuspendDriverById = (): UnsuspendDriver => {
  const mongoDriverRepository = new MongoDriverRepository()
  return new DbUnsuspendDriverById(mongoDriverRepository)
}
