import { PassangerModel } from './../../../../domain/models/passanger'
import { AddPassangerParams } from '@domain/usecases/add-passanger'

export interface AddPassangerRepository {
  add(passangerData: AddPassangerParams): Promise<PassangerModel>
}
