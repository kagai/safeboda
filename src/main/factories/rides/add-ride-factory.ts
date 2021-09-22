import { Controller } from '@presentation/interfaces/controller'
import { AddRideController } from '@presentation/controllers/ride/add-rides'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeDbAddRide } from '../usecases/db-add-ride-factory'
import { makeAddRideValidation } from './add-ride-validations-factory'
import { makeDbCheckRide } from '../usecases/db-check-ride-factory'

export const makeAddRideController = (): Controller => {
  const controller = new AddRideController(
    makeAddRideValidation(),
    makeDbAddRide(),
    makeDbCheckRide()
  )
  return makeLogController(controller)
}
