import { Option } from '@/lib'
import {
  ILightElementNodeRenderResult,
  INodeState,
  IStateContext
} from '@/interfaces'

export interface ILightNode extends IStateContext<INodeState> {
  rendered: Option<ILightElementNodeRenderResult>

  render(): ILightElementNodeRenderResult

  generateScript(): string
}
