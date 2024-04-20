import process from 'process'
import { EndMenuHandler } from '@/task1/implementations/handlers/endMenuHandler.js'

export class EndMenuStopExecutionHandler extends EndMenuHandler {
  async handle(request: string) {
    await super.handle(request)
    console.log('Exiting...')
    process.exit()
  }
}
