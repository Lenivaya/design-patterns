import { IHelpShower, ISupportRequestHandler } from '@/task1/interfaces'
import {
  Console,
  DeliveryAddressHandler,
  EmptyAddressHandler,
  EndMenuContinueExecutionHandler,
  SupportRequestHandler
} from '@/task1'

export class OrderDeliveryMenuHandler
  extends SupportRequestHandler
  implements IHelpShower
{
  chain: ISupportRequestHandler

  constructor() {
    super()
    this.chain = new EmptyAddressHandler()
    this.chain
      .addNextHandler(new DeliveryAddressHandler())
      .addNextHandler(new EndMenuContinueExecutionHandler())
  }

  canHandle = (request: string) =>
    request.includes('3') || request.includes('delivery')

  showHelp() {
    console.log(`
      Where to deliver your order?
    `)

    return this
  }

  async handle(_request: string): Promise<void> {
    this.showHelp()
    const request = await Console.userInput('address: ')
    return this.chain.handleRequest(request)
  }
}
