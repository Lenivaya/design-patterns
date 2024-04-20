import {
  Console,
  DontSellSoulHandler,
  SellSoulHandler,
  SupportRequestHandler
} from '@/task1/implementations'
import { IHelpShower, ISupportRequestHandler } from '@/task1/interfaces'

export class SellSoulMenuHandler
  extends SupportRequestHandler
  implements IHelpShower
{
  chain: ISupportRequestHandler

  constructor() {
    super()
    this.chain = new DontSellSoulHandler().setNextHandler(new SellSoulHandler())
  }

  canHandle = (request: string) =>
    request.includes('2') ||
    request.includes('sell') ||
    request.includes('soul')

  showHelp() {
    console.log(`
      Do you really want to do this??
        1. Yes
        2. No
        
        _ (any other) I assume yes.
    `)

    return this
  }

  async handle(_request: string): Promise<void> {
    this.showHelp()
    const request = await Console.userInput('input: ')
    return this.chain.handleRequest(request)
  }
}
