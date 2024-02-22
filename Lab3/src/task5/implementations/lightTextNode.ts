import { LightNode } from '@/task5/implementations/lightNode.js'

export class LightTextNode extends LightNode {
  constructor(private text: string) {
    super()
  }

  render = () => this.text
}
