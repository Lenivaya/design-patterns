import { LightElementNode, LightNode, LightTextNode } from '@/implementations'

export interface IVisitor {
  visit(node: LightNode): void

  visitTextNode(node: LightTextNode): void

  visitElementNode(node: LightElementNode): void
}
