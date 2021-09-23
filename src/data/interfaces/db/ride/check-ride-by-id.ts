import { AddRideParams } from '@domain/usecases/add-ride'

export interface LoadRideById {
  checkById(id: string): Promise<AddRideParams>
}
