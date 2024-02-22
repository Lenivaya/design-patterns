import { LightNode } from '@/task5/implementations/lightNode.js'
import {
  ILightElementNodeArguments,
  ILightNode
} from '@/task5/interfaces/index.js'
import { LightElementNodeArguments } from '@/task5/index.js'

// before applying flyweight pattern
//
// export class LightElementNode extends LightNode {
//   public children: ILightNode[] = []
//
//   constructor(
//     private tagName: string,
//     private selfClosing: boolean = false,
//     private displayType: 'block' | 'inline' = 'block',
//     private classes: string[] = []
//   ) {
//     super()
//   }
//
//   addChild = (child: ILightNode) => this.children.push(child)
//
//   render(): string {
//     const classAttribute =
//       this.classes.length > 0 ? `class="${this.classes.join(' ')}"` : ''
//
//     let result = `<${this.tagName} ${classAttribute} style="display: ${this.displayType};"`
//
//     if (!this.selfClosing) {
//       result += `>`
//       result += this.children.map((child) => child.render()).join('')
//       result += `</${this.tagName}>`
//     } else result += `/>`
//
//     return result
//   }
//
//   outerHTML = () => this.render()
//   innerHTML = () => this.children.map((child) => child.render()).join('')
// }

// after applying flyweight pattern
export class LightElementNode extends LightNode {
  public children: ILightNode[] = []

  constructor(private args: ILightElementNodeArguments) {
    super()
  }

  addChild = (child: ILightNode) => this.children.push(child)

  render(): string {
    const { tagName, selfClosing, displayType, classes } = this.args

    const classAttribute =
      classes.length > 0 ? `class="${classes.join(' ')}"` : ''

    let result = `<${tagName} ${classAttribute} style="display: ${displayType};"`

    if (!selfClosing) {
      result += `>`
      result += this.children.map((child) => child.render()).join('')
      result += `</${tagName}>`
    } else result += `/>`

    return result
  }

  outerHTML = () => this.render()
  innerHTML = () => this.children.map((child) => child.render()).join('')
}
