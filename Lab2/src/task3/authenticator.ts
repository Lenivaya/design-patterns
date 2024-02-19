import { getRandomElement } from '@/lib/utils.js'
import { IAuthenticator } from '@/task3/interfaces/IAuthenticator.js'

class Authenticator implements IAuthenticator {
  private static instance: Authenticator

  private constructor() {}

  public static getInstance(): Authenticator {
    if (!Authenticator.instance) Authenticator.instance = new Authenticator()
    return Authenticator.instance
  }

  public authenticate(username: string, password: string): boolean {
    return getRandomElement([true, false]) ?? false
  }
}

// Class is not exported by default at all,
// instead we export single instance because
// it's still possible to create class instances
// even with private constructors[1]
// after a ts -> js compilation
//
// [1]: https://medium.com/swlh/design-patterns-in-typescript-singleton-part-1-of-5-bd3742b46589
export const AuthenticatorService = Authenticator.getInstance()
