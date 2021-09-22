import { DbUpdateDriverById } from '@data/usecases/add-driver/db-update-driver'
import { updateDriver } from '@domain/usecases/update-driver'
import { MongoDriverRepository } from '@infra/db/mongodb/driver/mongo-driver-repository'

export const makeDbUpdateDriverById = (): updateDriver => {
  const mongoDriverRepository = new MongoDriverRepository()
  return new DbUpdateDriverById(mongoDriverRepository)
}
