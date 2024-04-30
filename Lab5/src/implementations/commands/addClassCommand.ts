import { IUndoableCommand } from '@/interfaces'
import { LightElementNodeArguments } from '@/implementations'

export class AddClassCommand implements IUndoableCommand {
  constructor(
    private args: LightElementNodeArguments,
    private className: string
  ) {}

  execute() {
    this.args.classes.push(this.className)
  }

  undo() {
    this.args.classes = this.args.classes.filter((c) => c !== this.className)
  }
}
