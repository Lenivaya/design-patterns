import { INodeState } from '@/interfaces'
import { LightNode } from '@/implementations'
import chalk from 'chalk'

export class NodeRenderedState implements INodeState {
  constructor(public node: LightNode) {}

  clear() {
    this.node.rendered = null
  }

  render() {
    // no-op already rendered
    console.log(chalk.bgRed.black(`Cannot render already rendered node`))
  }
}
