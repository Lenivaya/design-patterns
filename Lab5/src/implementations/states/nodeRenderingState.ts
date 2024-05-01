import { INodeState } from '@/interfaces'
import { LightNode } from '@/implementations'
import chalk from 'chalk'

export class NodeRenderingState implements INodeState {
  constructor(public node: LightNode) {}

  clear() {
    // no-op, wait before node is rendered
    console.log(chalk.bgRed.black(`Cannot clear node while rendering`))
  }

  render() {
    // no-op, wait before node is rendered
    console.log(chalk.bgRed.black(`Cannot render node while rendering`))
  }
}
