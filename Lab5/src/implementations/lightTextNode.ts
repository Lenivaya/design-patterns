import { LightNode } from '@/implementations/lightNode.js'
import { IVisitable } from '@/interfaces/IVisitable'
import { IVisitor } from '@/interfaces/IVisitor'

export class LightTextNode extends LightNode implements IVisitable {
  constructor(private text: string) {
    super()
  }

  renderTag = (_classes: string): string => this.text
  generateScript = (): string => ''
  renderClasses = (): string => ''

  accept(visitor: IVisitor): void {
    return visitor.visit(this)
  }
}
