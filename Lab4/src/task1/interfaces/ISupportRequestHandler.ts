import { IChainable } from '@/task1/interfaces/IChainable.js'
import { Option } from '@/lib'

export interface ISupportRequestHandler
  extends IChainable<ISupportRequestHandler> {
  handleRequest(request?: Option<string>): Promise<void>

  canHandle(request: string): boolean

  handle(request: string): Promise<void>
}
