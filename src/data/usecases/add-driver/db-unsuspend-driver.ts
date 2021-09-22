import { UnsuspendDriver } from '@data/interfaces/db/driver/unsuspend-driver'

export class DbUnsuspendDriverById implements UnsuspendDriver {
  constructor(private readonly loadUnsuspendDriver: UnsuspendDriver) {}
  async unsuspend(id: string): Promise<void> {
    await this.loadUnsuspendDriver.unsuspend(id)
  }
}
