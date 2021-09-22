import { ObjectId } from 'mongodb'

export interface UnsuspendDriver {
  unsuspend(id: ObjectId): Promise<void>
}
