import { EndMenuHandler } from '@/task1/implementations/handlers/endMenuHandler'

export class EndMenuContinueExecutionHandler extends EndMenuHandler {
  async handle(_request: string): Promise<void> {
    await super.handle(_request)
    console.log('Please try to choose proper variant again.')
  }
}
