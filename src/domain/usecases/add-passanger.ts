import { PassangerModel } from '@domain/models/passanger'

export interface AddPassangerParams extends Omit< PassangerModel, 'id'> {}

export interface AddPassanger {
  add(data: AddPassangerParams): Promise<PassangerModel>
}
