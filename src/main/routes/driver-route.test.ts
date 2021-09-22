import request from 'supertest'
import { Collection } from 'mongodb'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo'
import { sign } from 'jsonwebtoken'
import env from '../config/env'
import { fakeDriverParams } from '../../domain/mocks/mock-driver'
import { fakeAccountParams } from '../../domain/mocks/mock-account'

let driverCollection: Collection
let accountCollection: Collection

describe('driver Routes', () => {
  beforeAll(async () => await MongoHelper.connect(process.env.MONGO_URL))
  afterAll(async () => await MongoHelper.disconnect())
  beforeEach(async () => {
    driverCollection = await MongoHelper.getCollection('driver')
    await driverCollection.deleteMany({})

    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /api/driver', () => {
    test('Should return 403 on add driver without accessToken', () => {
      request(app).post('/api/driver').send(fakeDriverParams).expect(403)
    })

    test('Should return 204 on add driver with valid accessToken', async () => {
      const account = await accountCollection.insertOne({ ...fakeAccountParams, role: 'adm' })
      const id = account.ops[0]._id
      const accessToken = sign({ id }, env.jwtSecret)
      await accountCollection.updateOne({ _id: id }, { $set: { accessToken } })
      request(app)
        .post('/api/driver')
        .set('access-token', accessToken)
        .send(fakeDriverParams)
        .expect(204)
    })
  })

  describe('POST /driver/:driverId/suspend', () => {
    test('Should return 403 on  post suspend driver without accessToken', async () => {
      request(app).post('/driver/any_driver_id/suspend').expect(403)
    })

    test('Should return 204 on driver suspend with valid accessToken', async () => {
      const account = await accountCollection.insertOne(fakeAccountParams)
      const id = account.ops[0]._id
      const accessToken = sign({ id }, env.jwtSecret)
      await accountCollection.updateOne({ _id: id }, { $set: { accessToken } })
      request(app).post('/driver/any_driver_id/suspend').set('access-token', accessToken).expect(204)
    })
  })

  describe('DELETE /driver/:driverId/suspend', () => {
    test('Should return 403 on  post Unsuspend driver without accessToken', async () => {
      request(app).delete('/driver/any_driver_id/suspend').expect(403)
    })

    test('Should return 204 on driver Unsuspend with valid accessToken', async () => {
      const account = await accountCollection.insertOne(fakeAccountParams)
      const id = account.ops[0]._id
      const accessToken = sign({ id }, env.jwtSecret)
      await accountCollection.updateOne({ _id: id }, { $set: { accessToken } })
      request(app).delete('/driver/any_driver_id/suspend').set('access-token', accessToken).expect(204)
    })
  })
})
