import { LightNode } from '@/implementations/lightNode.js'

export class LightTextNode extends LightNode {
  constructor(private text: string) {
    super()
  }

  renderTag = (_classes: string): string => this.text
  generateScript = (): string => ''
  renderClasses = (): string => ''
}
