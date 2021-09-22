import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo'
import { MongoDriverRepository } from './mongo-driver-repository'

describe('Driver Mongodb Repository', () => {
  const sut = new MongoDriverRepository()
  let driverCollection: Collection
  const fakeDriver = { name: 'any_name', phoneNumber: '254706437516', suspended: false }

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    driverCollection = await MongoHelper.getCollection('accounts')
    await driverCollection.deleteMany({})
  })

  describe('AddAccount', () => {
    test('Should return a driver on add success', async () => {
      const driver = await sut.add(fakeDriver)
      expect(driver).toBeTruthy()
      expect(driver.id).toBeTruthy()
    })
  })
})
