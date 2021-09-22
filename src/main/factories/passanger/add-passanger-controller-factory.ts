import { Controller } from '@presentation/interfaces/controller'
import { AddPassangerController } from '@presentation/controllers/passanger/add-passanger'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeAddPassangerValidation } from './add-passanger-validations-factory'
import { makeDbAddPassanger } from '../usecases/db-add-passanger-factory'

export const makeAddPassangerController = (): Controller => {
  const controller = new AddPassangerController(
    makeAddPassangerValidation(),
    makeDbAddPassanger()
  )
  return makeLogController(controller)
}
