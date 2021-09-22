import { UpdateDriver } from '@data/interfaces/db/driver/update-driver'
import { UnsuspendDriver } from '@data/interfaces/db/driver/unsuspend-driver'
import { AddDriverRepository } from '@data/interfaces/db/driver/add-driver-repository'
import { LoadDriverByIdRepository } from '@data/interfaces/db/driver/load-driver-by-id-respository'
import { DriverModel } from '@domain/models/driver'
import { AddDriverParams } from '@domain/usecases/add-driver'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo'
import { QueryBuilder } from '../helpers/query-bulder'

export class MongoDriverRepository
implements
    AddDriverRepository,
    LoadDriverByIdRepository,
    UpdateDriver,
    UnsuspendDriver {
  async update(id: string): Promise<void> {
    const driverCollection = await MongoHelper.getCollection('driver')
    await driverCollection.updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $set: {
          suspended: true
        }
      }
    )
  }

  async add(driverData: AddDriverParams): Promise<DriverModel> {
    const driverCollection = await MongoHelper.getCollection('driver')
    const result = await driverCollection.insertOne(driverData)
    const driver = result.ops[0]
    return MongoHelper.map(driver)
  }

  async loadById(id: ObjectId): Promise<DriverModel> {
    const driverCollection = await MongoHelper.getCollection('driver')
    const driver = await driverCollection.findOne({ _id: new ObjectId(id) })
    return driver && MongoHelper.map(driver)
  }

  async unsuspend(id: string): Promise<void> {
    const driverCollection = await MongoHelper.getCollection('driver')
    await driverCollection.updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $set: {
          suspended: false
        }
      }
    )
  }
}
