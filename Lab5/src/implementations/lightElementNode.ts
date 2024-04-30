import { LightNode } from '@/implementations/lightNode.js'
import { ILightElementNodeArguments, ILightNode } from '@/interfaces/index.js'

export type EventListenerCallback = () => void

export class LightElementNode extends LightNode {
  public children: ILightNode[] = []
  private eventListeners: Map<string, EventListenerCallback[]> = new Map()

  constructor(private args: ILightElementNodeArguments) {
    super()
  }

  addChild = (child: ILightNode) => this.children.push(child)
  addChildren = (children: ILightNode[]) => this.children.push(...children)
  removeChild = (child: ILightNode) =>
    (this.children = this.children.filter((c) => c !== child))

  renderClasses(): string {
    const { classes } = this.args
    return classes.length > 0 ? `class="${classes.join(' ')}"` : ''
  }

  renderTag(classes: string): string {
    const { tagName, selfClosing, displayType, id } = this.args

    let result = `<${tagName} ${classes} id="${id}" style="display: ${displayType};"`

    if (!selfClosing) {
      result += `>`
      result += this.children.map((child) => child.render().html).join('')
      result += `</${tagName}>`
    } else result += `/>`

    return result
  }

  generateScript(): string {
    let script = ''
    this.eventListeners.forEach((callbacks, event) =>
      callbacks.forEach((callback) => {
        script += `document.getElementById('${this.args.id}').addEventListener('${event}', ${callback.toString()});\n`
      })
    )
    script += this.children.map((child) => child.generateScript()).join('')
    return script
  }

  outerHTML = () => this.render()
  innerHTML = () => this.children.map((child) => child.render()).join('')

  addEventListener(event: string, callback: EventListenerCallback) {
    if (!this.eventListeners.has(event)) this.eventListeners.set(event, [])
    const eventCallbacks = this.eventListeners.get(event)!
    eventCallbacks.push(callback)
  }
}
