import { AddDriver } from '@domain/usecases/add-driver'
import { badRequest, ok, serverError } from '@presentation/helpers/http/http'
import { Controller, HttpResponse, Validation } from '@presentation/interfaces'

export class AddDriverController implements Controller {
  constructor(private readonly validation: Validation, private readonly addDriver: AddDriver) {}

  async handle(request: AddDriverController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const driver = await this.addDriver.add({
        name: request.name,
        phoneNumber: request.phoneNumber,
        suspended: false
      })
      return ok(driver)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddDriverController {
  export interface Request {
    name: string
    phoneNumber: string
    suspended: boolean
  }
}
