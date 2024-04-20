import { IRunway } from '@/task2/types/interfaces/IRunway'
import { v4 as uuidv4 } from 'uuid'
import chalk from 'chalk'
import { Option } from '@/lib'
import { ICommandCenterMediator } from 'task2/types/interfaces'

export class Runway implements IRunway {
  constructor(
    public isBusy = false,
    public id: string = uuidv4(),
    public mediator: Option<ICommandCenterMediator> = null
  ) {}

  highlightStatus() {
    const message = this.isBusy
      ? chalk.bold.red(`Runway ${this.id} is busy!`)
      : chalk.bold.green(`Runway ${this.id} is free!`)

    console.log(message)
  }
}
