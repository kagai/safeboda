import { Controller } from '@presentation/interfaces/controller'
import { StopRideController } from '@presentation/controllers/ride/stop-ride'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeDbLoadRideById } from '../usecases/db-load-ride-by-id'
import { makeDbStopRideById } from '../usecases/db-stop-ride-factory'

export const makeStopRideController = (): Controller => {
  const controller = new StopRideController(
    makeDbLoadRideById(),
    makeDbStopRideById())
  return makeLogController(controller)
}
