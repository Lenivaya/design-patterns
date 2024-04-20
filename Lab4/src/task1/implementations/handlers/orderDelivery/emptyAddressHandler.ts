import { SupportRequestHandler } from '@/task1/implementations'
import { isNullOrWhitespace } from '@/lib/strings.js'
import process from 'process'

export class EmptyAddressHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean => isNullOrWhitespace(request)

  async handle(_request: string) {
    console.log(`
    You entered a bad address. (
    `)
    process.exit()
  }
}
