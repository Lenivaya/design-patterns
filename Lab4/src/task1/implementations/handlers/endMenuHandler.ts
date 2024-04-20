import { SupportRequestHandler } from '@/task1/implementations/supportRequestHandler.js'

export class EndMenuHandler extends SupportRequestHandler {
  canHandle = () => true

  async handle(_request: string): Promise<void> {
    console.log("\n\nProper handler for request wasn't found")
  }
}
