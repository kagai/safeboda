import { ObjectId } from 'mongodb'
import { LoadDriverById } from '@domain/usecases/load-driver'
import { UnsuspendDriver } from '@data/interfaces/db/driver/unsuspend-driver'
import { forbidden, serverError, noContent } from '@presentation/helpers/http/http'
import { InvalidParamError, InvalidMongoIDError } from '@presentation/errors'
import { Controller, HttpResponse } from '@presentation/interfaces'

export class UnsuspendDriverController implements Controller {
  constructor(
    private readonly loadDriverById: LoadDriverById,
    private readonly unsuspend: UnsuspendDriver
  ) { }

  async handle(request: UnsuspendDriverController.Request): Promise<HttpResponse> {
    try {
      const { driverId } = request
      if (!ObjectId.isValid(driverId)) return forbidden(new InvalidMongoIDError(driverId))
      const driver = await this.loadDriverById.loadById(driverId)
      if (!driver) return forbidden(new InvalidParamError('driverId'))
      await this.unsuspend.unsuspend(driverId)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace UnsuspendDriverController {
  export interface Request {
    driverId: string
  }
}
