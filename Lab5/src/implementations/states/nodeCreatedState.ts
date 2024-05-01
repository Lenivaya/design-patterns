import { INodeState } from '@/interfaces'
import { LightNode } from '@/implementations'
import chalk from 'chalk'

export class NodeCreatedState implements INodeState {
  constructor(public node: LightNode) {}

  clear() {
    // no-op, nothing to clear
    console.log(chalk.bgRed.black(`Cannot clear not rendered node`))
  }

  render() {
    this.node.rendered = this.node.render()
  }
}
