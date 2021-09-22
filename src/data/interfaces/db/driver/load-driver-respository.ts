import { DriverModel } from '@domain/models/driver'

export interface LoadDriverRepository {
  loadAll(accountId: string): Promise<DriverModel[]>
}
