import { SupportRequestHandler } from '@/task1/implementations'
import process from 'process'

export class PotatoBuyHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean =>
    request.trim() === '3' || request.toLowerCase().includes('potato')

  async handle(_request: string) {
    console.log(`
    Doing some important buy things so user will get his potato.
    `)
    process.exit()
  }
}
