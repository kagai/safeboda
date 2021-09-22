import { ObjectId } from 'mongodb'
import { LoadDriverById } from '@domain/usecases/load-driver'
import { UpdateDriver } from '@data/interfaces/db/driver/update-driver'
import { forbidden, serverError, noContent } from '@presentation/helpers/http/http'
import { InvalidParamError, InvalidMongoIDError } from '@presentation/errors'
import { Controller, HttpResponse } from '@presentation/interfaces'

export class SuspendDriverController implements Controller {
  constructor(
    private readonly loadDriverById: LoadDriverById,
    private readonly updateDriver: UpdateDriver
  ) { }

  async handle(request: SuspendDriverController.Request): Promise<HttpResponse> {
    try {
      const { driverId } = request
      if (!ObjectId.isValid(driverId)) return forbidden(new InvalidMongoIDError(driverId))
      const driver = await this.loadDriverById.loadById(driverId)
      if (!driver) return forbidden(new InvalidParamError('driverId'))
      await this.updateDriver.update(driverId)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace SuspendDriverController {
  export interface Request {
    driverId: string
  }
}
