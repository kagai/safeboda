import { AddPassanger } from '@domain/usecases/add-passanger'
import { badRequest, ok, serverError } from '@presentation/helpers/http/http'
import { Controller, HttpResponse, Validation } from '@presentation/interfaces'

export class AddPassangerController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addPassanger: AddPassanger
  ) {}

  async handle(request: AddPassangerController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const passanger = await this.addPassanger.add({
        name: request.name,
        phoneNumber: request.phoneNumber
      })
      return ok(passanger)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddPassangerController {
  export interface Request {
    name: string
    phoneNumber: string
  }

  export interface data {
    name: string
    phoneNumber: string
  }
}
