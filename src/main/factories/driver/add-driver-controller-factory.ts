import { Controller } from '@presentation/interfaces/controller'
import { AddDriverController } from '@presentation/controllers/driver/add-driver'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeAddDriverValidation } from './add-driver-validations-factory'
import { makeDbAddDriver } from '../usecases/db-add-driver-factory'

export const makeAddDriverController = (): Controller => {
  const controller = new AddDriverController(
    makeAddDriverValidation(),
    makeDbAddDriver()
  )
  return makeLogController(controller)
}
