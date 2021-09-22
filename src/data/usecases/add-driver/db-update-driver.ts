import { UpdateDriver } from '@data/interfaces/db/driver/update-driver'

export class DbUpdateDriverById implements UpdateDriver {
  constructor(private readonly loadUpdateDriver: UpdateDriver) {}

  async update(id: string): Promise<void> {
    await this.loadUpdateDriver.update(id)
  }
}
