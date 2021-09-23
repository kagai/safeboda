import { LoadRideById } from './../../../../data/interfaces/db/ride/check-ride-by-id'
import { RideModel } from './../../../../domain/models/ride'
import { CheckRide } from './../../../../data/interfaces/db/ride/check-ride'
import { AddRideParams } from '@domain/usecases/add-ride'
import { MongoHelper } from '../helpers/index'
import { AddRideRepository } from '@data/interfaces/db/ride/add-ride-repository'
import { LoadRideRepository } from '@data/interfaces/db/ride/load-ride-repository'
import { LoadRideByIdRepository } from '@data/interfaces/db/ride/load-ride-by-id-respository'
import { StopRide } from '@data/interfaces/db/ride/stop-ride'
import { ObjectId } from 'mongodb'

export class MongoRideRepository // eslint-disable-next-line indent
  implements
    AddRideRepository,
    LoadRideRepository,
    StopRide,
    LoadRideByIdRepository,
    CheckRide,
    LoadRideById
{
  async checkById(passangerId: string): Promise<AddRideParams> {
    const rideCollection = await MongoHelper.getCollection('ride')
    const ride = await rideCollection.findOne({
      driverId: {
        $eq: passangerId
      },
      rideStatus: 'ongoing'
    })
    return ride && MongoHelper.map(ride)
  }

  async check(driverId: string): Promise<RideModel> {
    const rideCollection = await MongoHelper.getCollection('ride')
    const ride = await rideCollection.findOne({
      driverId: {
        $eq: driverId
      },
      rideStatus: 'ongoing'
    })
    return ride && MongoHelper.map(ride)
  }

  async loadById(id: string): Promise<RideModel> {
    const rideCollection = await MongoHelper.getCollection('ride')
    const ride = await rideCollection.findOne({ _id: new ObjectId(id) })
    return ride && MongoHelper.map(ride)
  }

  async stop(id: string): Promise<RideModel> {
    const driverCollection = await MongoHelper.getCollection('ride')
    const ride = await driverCollection.updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $set: {
          rideStatus: 'done'
        }
      }
    )
    return ride !== null ? MongoHelper.map(ride) : null
  }

  async loadAll(rideStatus?: string): Promise<RideModel[]> {
    const rideCollection = await MongoHelper.getCollection('ride')
    const ongoingRides = rideCollection.find({
      rideStatus: {
        $eq: 'ongoing'
      }
    })
    return ongoingRides.toArray()
  }

  async add(rideData: AddRideParams): Promise<RideModel> {
    const rideCollection = await MongoHelper.getCollection('ride')
    const result = await rideCollection.insertOne(rideData)
    const ride = result.ops[0]
    return MongoHelper.map(ride)
  }
}
