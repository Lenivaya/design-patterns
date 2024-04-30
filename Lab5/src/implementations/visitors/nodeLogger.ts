import { IVisitor } from '@/interfaces/IVisitor'
import { LightElementNode, LightNode, LightTextNode } from '@/implementations'

export class NodeLogger implements IVisitor {
  visit(node: LightNode): void {
    if (node instanceof LightElementNode) this.visitElementNode(node)
    if (node instanceof LightTextNode) this.visitTextNode(node)
  }

  visitElementNode(node: LightElementNode): void {
    console.log({ variant: 'Element', ...node.render() })
  }

  visitTextNode(node: LightTextNode): void {
    console.log({ variant: 'Text', ...node.render() })
  }
}
