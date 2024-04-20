import { IMediatorComponent } from '@/task2/types/interfaces/IMediator'
import { ICommandCenterMediator } from '@/task2/types/interfaces/ICommandCenterMediator'

export interface IRunway extends IMediatorComponent<ICommandCenterMediator> {
  id: string
  isBusy: boolean

  highlightStatus(): void
}
