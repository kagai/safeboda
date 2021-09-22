export interface AccountModel {
  id: string
  name: string
  email: string
  password: string
  createdAt?:Date
}

export interface AuthenticationModel {
  accessToken: string
  name: string
}
