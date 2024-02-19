export interface IAuthenticator {
  authenticate(username: string, password: string): boolean
}
