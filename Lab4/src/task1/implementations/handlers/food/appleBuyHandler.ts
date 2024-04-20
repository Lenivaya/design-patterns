import { SupportRequestHandler } from '@/task1/implementations'
import process from 'process'

export class AppleBuyHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean =>
    request.trim() === '1' || request.toLowerCase().includes('apple')

  async handle(_request: string) {
    console.log(`
    Doing some important buy things so user will get his apples.
    `)
    process.exit()
  }
}
