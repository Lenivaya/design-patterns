import { ISupportRequestHandler } from '@/task1/interfaces/index.js'
import { Option } from '@/lib'

export abstract class SupportRequestHandler implements ISupportRequestHandler {
  nextHandler: Option<SupportRequestHandler> = null

  setNextHandler(handler: SupportRequestHandler): ISupportRequestHandler {
    this.nextHandler = handler
    return this
  }

  addNextHandler(handler: ISupportRequestHandler): ISupportRequestHandler {
    this.nextHandler = handler
    return this.nextHandler
  }

  async handleRequest(request: string): Promise<void> {
    if (this.canHandle(request)) await this.handle(request)
    else if (this.nextHandler) await this.nextHandler.handleRequest(request)
    else console.log('There is no handler for your request.', request)
  }

  abstract canHandle(request: string): boolean

  abstract handle(request: string): Promise<void>
}
