import { SupportRequestHandler } from '@/task1/implementations/supportRequestHandler.js'
import process from 'process'
import chalk from 'chalk'

export class StandardSubscriptionOrderHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean =>
    request.trim() === '2' || request.toLowerCase().includes('standard')

  async handle(_request: string) {
    console.log(`
    Doing some important buy things part,
    so user will get his standard subscription
    and service will get users money.
    `)
    console.log(chalk.bold.green('Subscription successful!'))
    process.exit()
  }
}
