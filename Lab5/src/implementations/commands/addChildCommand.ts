import { ILightNode, IUndoableCommand } from '@/interfaces'
import { LightElementNode } from '@/implementations'

export class AddChildCommand implements IUndoableCommand {
  constructor(
    private parent: LightElementNode,
    private child: ILightNode
  ) {}

  execute() {
    this.parent.addChild(this.child)
  }

  undo() {
    this.parent.removeChild(this.child)
  }
}
