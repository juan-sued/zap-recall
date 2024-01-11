export interface ISignInResponse {
  user: {
    name: string
    email: string
    createdAt: Date
  }
  token: string
}
