import { Controller } from '../../../presentation/interfaces/controller'
import { LoadRidesController } from '../../../presentation/controllers/ride/load-rides'
import { makeLogController } from '../decorators/log-controller-factory'
import { makeDbLoadRides } from '../usecases/db-load-rides'

export const makeLoadRidesController = (): Controller => {
  const controller = new LoadRidesController(makeDbLoadRides())
  return makeLogController(controller)
}
