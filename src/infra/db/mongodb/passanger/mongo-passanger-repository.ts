import { AddPassangerRepository } from '@data/interfaces/db/passangers/add-passanger-repository'
import { PassangerModel } from '@domain/models/passanger'
import { AddPassangerParams } from '@domain/usecases/add-passanger'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo'

export class MongoPassangerRepository implements AddPassangerRepository {
  async add(passangerData: AddPassangerParams): Promise<PassangerModel> {
    const passangerCollection = await MongoHelper.getCollection('passanger')
    const result = await passangerCollection.insertOne(passangerData)
    const passanger = result.ops[0]
    return MongoHelper.map(passanger)
  }

  async loadById(id: ObjectId): Promise<PassangerModel> {
    const passangerCollection = await MongoHelper.getCollection('passanger')
    const passanger = await passangerCollection.findOne({ _id: new ObjectId(id) })
    return passanger && MongoHelper.map(passanger)
  }
}
