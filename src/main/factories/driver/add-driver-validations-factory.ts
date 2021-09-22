import { ValidationComposite } from '../../../validation/validator/validation-composite'
import { RequiredFieldValidation } from '../../../validation/validator/required-fields-validation'
import { Validation } from '@presentation/interfaces/validation'

export const makeAddDriverValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'phoneNumber']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
