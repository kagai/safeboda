import { DriverModel } from '@domain/models/driver'

export interface LoadDriverByIdRepository {
  loadById(id: string): Promise<DriverModel>
}
