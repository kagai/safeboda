import { Controller } from '@presentation/interfaces/controller'
import { SuspendDriverController } from '@presentation/controllers/driver/suspend-driver'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeDbLoadDriverById } from '../usecases/db-load-driver-by-id'
import { makeDbUpdateDriverById } from '../usecases/db-update-driver-factory'

export const makeSuspendDriverController = (): Controller => {
  const controller = new SuspendDriverController(
    makeDbLoadDriverById(),
    makeDbUpdateDriverById())
  return makeLogController(controller)
}
