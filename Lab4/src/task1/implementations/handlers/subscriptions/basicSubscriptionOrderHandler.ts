import { SupportRequestHandler } from '@/task1/implementations/supportRequestHandler.js'
import process from 'process'
import chalk from 'chalk'

export class BasicSubscriptionOrderHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean =>
    request.trim() === '1' || request.toLowerCase().includes('basic')

  async handle(_request: string) {
    console.log(`
    Doing some important buy things part,
    so user will get his basic subscription
    and service will get users money.
    `)
    console.log(chalk.bold.green('Subscription successful!'))
    process.exit()
  }
}
