import { SupportRequestHandler } from '@/task1/implementations'
import process from 'process'

export class OrangeBuyHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean =>
    request.trim() === '2' || request.toLowerCase().includes('orange')

  async handle(_request: string) {
    console.log(`
    Doing some important buy things so user will get his oranges.
    `)
    process.exit()
  }
}
