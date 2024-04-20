import { Option } from '@/lib'

export interface IMediator<TMessage> {
  notify(message: TMessage): Promise<void>
}

export interface IMediatorComponent<TMediator> {
  mediator: Option<TMediator>
}
