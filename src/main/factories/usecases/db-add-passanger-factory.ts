import { DbAddPassanger } from '@data/usecases/add-passanger/db-add-passanger'
import { MongoPassangerRepository } from '@infra/db/mongodb/passanger/mongo-passanger-repository'

export const makeDbAddPassanger = (): DbAddPassanger => {
  const mongoPassangerRepository = new MongoPassangerRepository()
  return new DbAddPassanger(mongoPassangerRepository)
}
