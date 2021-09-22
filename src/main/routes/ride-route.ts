import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes'
import { makeAddRideController } from '@main/factories/rides/add-ride-factory'
import { makeStopRideController } from '@main/factories/rides/stop-ride-factory'
import { makeLoadRidesController } from '@main/factories/rides/load-rides-factory'
import { Auth } from '@main/middlewares/auth'

const addRideController = makeAddRideController()
const stopRideController = makeStopRideController()
const loadRidesController = makeLoadRidesController()

export default (router: Router): void => {
  router.post('/ride/:passangerId/:driverId', Auth, adaptRoutes(addRideController))
  router.delete('/ride/:rideId/stop', Auth, adaptRoutes(stopRideController))
  router.get('/ride/ongoing', Auth, adaptRoutes(loadRidesController))
}
