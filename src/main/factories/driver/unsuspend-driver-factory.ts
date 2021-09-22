import { Controller } from '@presentation/interfaces/controller'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeDbLoadDriverById } from '../usecases/db-load-driver-by-id'
import { makeDbUnsuspendDriverById } from '../usecases/db-unsuspend-driver-factory'
import { UnsuspendDriverController } from '@presentation/controllers/driver/unsuspend-driver'

export const makeUnsuspendDriverController = (): Controller => {
  const controller = new UnsuspendDriverController(
    makeDbLoadDriverById(),
    makeDbUnsuspendDriverById())
  return makeLogController(controller)
}
