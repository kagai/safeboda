export class RideOngoingError extends Error {
  constructor() {
    super('Ongoing ride , you cannot have more than  1 ride ')
    this.name = 'RideOngoingError'
  }
}
