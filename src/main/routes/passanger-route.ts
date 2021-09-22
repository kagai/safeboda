import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes'
import { makeAddPassangerController } from '@main/factories/passanger/add-passanger-controller-factory'
import { Auth } from '@main/middlewares/auth'

const addDriverController = makeAddPassangerController()

export default (router: Router): void => {
  router.post('/passanger', Auth, adaptRoutes(addDriverController))
}
