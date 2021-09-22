import { ObjectId } from 'mongodb'

export interface updateDriver {
  update(id: ObjectId): Promise<void>
}
