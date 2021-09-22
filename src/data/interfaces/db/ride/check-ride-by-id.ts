import { AddRideParams } from '@domain/usecases/add-ride'

export interface LoadRideById {
  loadRideById(id: string): Promise<AddRideParams>
}
