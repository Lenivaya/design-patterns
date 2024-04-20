import { SupportRequestHandler } from '@/task1/implementations'
import process from 'process'

export class DontSellSoulHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean =>
    request.includes('2') || request.toLowerCase().includes('no')

  async handle(_request: string) {
    console.log(`
    See you next time 😈. 
    `)
    process.exit()
  }
}
