import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes'
import { makeAddDriverController } from '@main/factories/driver/add-driver-controller-factory'
import { makeSuspendDriverController } from '@main/factories/driver/suspend-driver-controller-factory'
import { makeUnsuspendDriverController } from '@main/factories/driver/unsuspend-driver-factory'
import { Auth } from '@main/middlewares/auth'

const addDriverController = makeAddDriverController()
const suspendDriverController = makeSuspendDriverController()
const unsuspendDriverController = makeUnsuspendDriverController()

export default (router: Router): void => {
  router.post('/driver', Auth, adaptRoutes(addDriverController))
  router.post('/driver/:driverId/suspend', Auth, adaptRoutes(suspendDriverController))
  router.delete('/driver/:driverId/suspend', Auth, adaptRoutes(unsuspendDriverController))
}
