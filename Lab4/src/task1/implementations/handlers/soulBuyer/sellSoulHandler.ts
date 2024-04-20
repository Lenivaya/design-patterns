import { SupportRequestHandler } from '@/task1/implementations'
import process from 'process'
import chalk from 'chalk'

export class SellSoulHandler extends SupportRequestHandler {
  canHandle = (_request: string): boolean => true

  async handle(_request: string) {
    console.log(`
    ${chalk.bold.redBright('😈 Deal.')}
    `)
    process.exit()
  }
}
