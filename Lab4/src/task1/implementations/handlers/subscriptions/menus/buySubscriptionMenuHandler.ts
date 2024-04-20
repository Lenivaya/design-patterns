import {
  BasicSubscriptionOrderHandler,
  Console,
  EndMenuContinueExecutionHandler,
  PremiumSubscriptionOrderHandler,
  StandardSubscriptionOrderHandler,
  SupportRequestHandler
} from '@/task1/implementations'
import { IHelpShower, ISupportRequestHandler } from '@/task1/interfaces'
import chalk from 'chalk'

export class BuySubscriptionMenuHandler
  extends SupportRequestHandler
  implements IHelpShower
{
  chain: ISupportRequestHandler

  constructor() {
    super()
    this.chain = new BasicSubscriptionOrderHandler()
    this.chain
      .addNextHandler(new StandardSubscriptionOrderHandler())
      .addNextHandler(new PremiumSubscriptionOrderHandler())
      .addNextHandler(new EndMenuContinueExecutionHandler())
  }

  canHandle = (request: string) =>
    request.includes('4') || request.includes('subscription')

  showHelp() {
    console.log(`
      Which subscription do you want?
        1. ${chalk.green('Basic (10$)')}
        2. ${chalk.yellow('Standard (15$)')} 
        3. ${chalk.bold.magenta('Premium (30$)')} 
        
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
