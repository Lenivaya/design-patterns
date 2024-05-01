import {
  ILightElementNodeRenderResult,
  ILightNode,
  INodeState
} from '@/interfaces'
import {
  NodeCreatedState,
  NodeRenderedState,
  NodeRenderingState
} from '@/implementations'
import { isSome, Option } from '@/lib'
import chalk from 'chalk'

export abstract class LightNode implements ILightNode {
  rendered: Option<ILightElementNodeRenderResult> = null
  state!: INodeState

  protected constructor(state: Option<INodeState> = null) {
    if (isSome(state)) this.transition(state)
    else this.transition(new NodeCreatedState(this))
  }

  transition(state: INodeState) {
    this.state = state
    console.log(
      chalk.greenBright('->'),
      chalk.green(`Node state transitioned to ${state.constructor.name}`)
    )
  }

  // template method
  render(): ILightElementNodeRenderResult {
    this.transition(new NodeRenderingState(this))
    let html: string = ''

    const classes = this.renderClasses()
    this.onClassListApplied()

    html += this.renderTag(classes)
    this.onTextRendered()

    const script = this.generateScript()
    this.onScriptsRendered()

    this.onCreated()
    const renderedResult = {
      html,
      script
    }
    this.rendered = renderedResult
    this.transition(new NodeRenderedState(this))

    return renderedResult
  }

  // steps
  abstract renderClasses(): string

  abstract renderTag(classes: string): string

  abstract generateScript(): string

  // hooks
  onClassListApplied(): void {}

  onTextRendered(): void {}

  onScriptsRendered(): void {}

  onCreated(): void {}
}
