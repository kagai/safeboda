import express from 'express'
import Middlewares from '../config/middlewares'
import Routes from '../config/routes'

// import ExceptRoute from './except-route'

const app = express()
// ExceptRoute(app)
Middlewares(app)
Routes(app)

export default app
