import {
  AppleBuyHandler,
  Console,
  EndMenuContinueExecutionHandler,
  OrangeBuyHandler,
  PotatoBuyHandler,
  SupportRequestHandler
} from '@/task1/implementations'
import { IHelpShower, ISupportRequestHandler } from '@/task1/interfaces'

export class BuyFoodMenuHandler
  extends SupportRequestHandler
  implements IHelpShower
{
  chain: ISupportRequestHandler

  constructor() {
    super()
    this.chain = new AppleBuyHandler()
    this.chain
      .addNextHandler(new OrangeBuyHandler())
      .addNextHandler(new PotatoBuyHandler())
      .addNextHandler(new EndMenuContinueExecutionHandler())
  }

  canHandle = (request: string) =>
    request.includes('1') || request.includes('food')

  showHelp() {
    console.log(`
      What do you want to buy?
        1. Apples
        2. Oranges
        3. Potato
        
        _ (any other) exit
    `)

    return this
  }

  async handle(_request: string): Promise<void> {
    this.showHelp()
    const request = await Console.userInput('input: ')
    return this.chain.handleRequest(request)
  }
}
