export interface ISignInResponse {
  user: {
    id: number
    name: string
    email: string
    createdAt: Date
  }
  token: string
}
