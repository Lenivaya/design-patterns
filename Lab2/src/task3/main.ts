import { AuthenticatorService } from '@/task3/authenticator.js'

// Works but even when using a private constructor, code compiled
// from ts -> js will allow to create new instance[1], so it's better
// to use single-instance export
//
// [1]: https://medium.com/swlh/design-patterns-in-typescript-singleton-part-1-of-5-bd3742b46589

// const auth1 = Authenticator.getInstance()
// const auth2 = Authenticator.getInstance()
//
// console.log('Is two instances of authenticator equal:', auth1 === auth2)
// console.log(
//   'Example of authentication:',
//   auth1.authenticate('username', 'password')
// )
//
//
// const auth3 = new Authenticator() // Error: Constructor of class 'Authenticator' is private.
// console.log(auth3 === auth1)

const auth1 = AuthenticatorService
const auth2 = AuthenticatorService

console.log('Is two instances of authenticator equal:', auth1 === auth2)
console.log(
  'Example of authentication:',
  auth1.authenticate('username', 'password')
)
