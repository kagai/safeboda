import request from 'supertest'
import { Collection } from 'mongodb'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo'
import { sign } from 'jsonwebtoken'
import env from '../config/env'
import { fakeRideParams } from '../../domain/mocks/mock-ride'
import { fakeAccountParams } from '../../domain/mocks/mock-account'

let rideCollection: Collection
let accountCollection: Collection

describe('ride Routes', () => {
  beforeAll(async () => await MongoHelper.connect(process.env.MONGO_URL))
  afterAll(async () => await MongoHelper.disconnect())
  beforeEach(async () => {
    rideCollection = await MongoHelper.getCollection('ride')
    await rideCollection.deleteMany({})

    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /ride/:passangerId/:driverId', () => {
    test('Should return 403 on save ride result without accessToken', async () => {
      request(app)
        .post('/api/ride/any_passanger_id/any_driver_id')
        .send(fakeRideParams)
        .expect(200)
    })
  })
})
