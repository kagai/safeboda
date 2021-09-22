export class InvalidMongoIDError extends Error {
  constructor(paramName: string) {
    super(`Invalid id :${paramName} ,only mongodb object IDs are accepted as valid ids `)
    this.name = paramName
  }
}
