import { IMediator } from '@/task2/types/interfaces/index'
import { CommandCenterMessage } from '@/task2/implementations'

export interface ICommandCenterMediator
  extends IMediator<CommandCenterMessage> {}
