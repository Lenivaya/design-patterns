import { ILightNode } from '@/interfaces/index.js'
import { ILightElementNodeRenderResult } from '@/interfaces/ILightElementNodeRenderResult'

export abstract class LightNode implements ILightNode {
  // template method
  render(): ILightElementNodeRenderResult {
    let html: string = ''

    const classes = this.renderClasses()
    this.onClassListApplied()

    html += this.renderTag(classes)
    this.onTextRendered()

    const script = this.generateScript()
    this.onScriptsRendered()

    this.onCreated()
    return {
      html,
      script
    }
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
