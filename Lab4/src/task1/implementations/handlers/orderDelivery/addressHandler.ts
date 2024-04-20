import { SupportRequestHandler } from '@/task1/implementations'
import { isNullOrWhitespace } from '@/lib'
import process from 'process'

export class DeliveryAddressHandler extends SupportRequestHandler {
  canHandle = (request: string): boolean => !isNullOrWhitespace(request)

  async handle(request: string) {
    console.log(`
    Delivering to ${request}
    `)
    process.exit()
  }
}
