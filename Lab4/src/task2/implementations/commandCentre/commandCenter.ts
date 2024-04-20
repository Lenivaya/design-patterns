import { isNone, isSome, sleep } from '@/lib'
import chalk from 'chalk'
import { AircraftStatus, CommandCenterMessage } from '@/task2/implementations'
import {
  IAircraft,
  ICommandCenter,
  ICommandCenterMediator,
  IRunway
} from '@/task2/types/interfaces'

export class CommandCenter implements ICommandCenterMediator, ICommandCenter {
  constructor(
    private runways = new Map<string, IRunway>(),
    private airCraftStatues = new Map<string, AircraftStatus>()
  ) {}

  public async notify(message: CommandCenterMessage) {
    switch (message.kind) {
      case 'TakeOffAirCraft':
        await this.takeOffAirCraft(
          message.payload.airCraft,
          message.payload.flightRaceName,
          message.payload.runwayId
        )
        break
      case 'LandAirCraft':
        await this.landAirCraft(
          message.payload.airCraft,
          message.payload.flightRaceName,
          message.payload.runwayId
        )
        break
    }
  }

  async takeOffAirCraft(
    airCraft: IAircraft,
    flightRaceName: string,
    runwayId: string
  ) {
    const runway = this.runways.get(runwayId)
    if (isNone(runway))
      throw new Error("Can't take off from non-existing runway")
    if (runway.isBusy) throw new Error('Runway is busy')

    const aircraftStatus = this.airCraftStatues.get(airCraft.id)
    if (isSome(aircraftStatus) && aircraftStatus.kind === 'In-air')
      throw new Error('Air Craft has already been taken!')

    runway.isBusy = true
    this.airCraftStatues.set(airCraft.id, {
      kind: 'On-runway',
      currentRunway: runway
    })

    const airCraftDisplayMessage = `Aircraft (${airCraft.name}) - (${flightRaceName})`
    console.log(
      chalk.bold.yellow(
        `${airCraftDisplayMessage} is taking off from runway (${runway.id}).`
      )
    )

    // Simulating some time needed for aircraft to take off
    // for this amount of time runway will be busy
    await sleep(1000)

    this.airCraftStatues.set(airCraft.id, { kind: 'In-air', flightRaceName })
    runway.isBusy = false

    console.log(
      chalk.bold.greenBright(`${airCraftDisplayMessage} has took off.\n`)
    )
  }

  async landAirCraft(
    airCraft: IAircraft,
    flightRaceName: string,
    runwayId: string
  ) {
    const aircraftStatus = this.airCraftStatues.get(airCraft.id)
    if (isSome(aircraftStatus) && aircraftStatus.kind !== 'In-air')
      throw new Error("Aircraft that is not in the air can't be landed!")

    const runway = this.runways.get(runwayId)
    if (isNone(runway)) throw new Error("Can't land on non-existing runway")
    if (runway.isBusy) throw new Error('Runway is busy')

    runway.isBusy = true

    const airCraftMessage = `Aircraft (${airCraft.name}) - (${flightRaceName})`
    console.log(
      chalk.bold.yellow(
        `${airCraftMessage} is landing on runway (${runway.id}).`
      )
    )

    // Simulating some time needed for aircraft to land
    await sleep(1000)

    this.airCraftStatues.set(airCraft.id, {
      kind: 'Landed',
      currentRunway: runway
    })

    console.log(chalk.bold.greenBright(`${airCraftMessage} has landed.\n`))
  }

  addRunways(runwaysToAdd: IRunway[]) {
    runwaysToAdd.forEach(this.addRunway.bind(this))
    return this
  }

  removeRunways(runwaysToRemove: IRunway[]) {
    runwaysToRemove.forEach(this.removeRunway.bind(this))
    return this
  }

  addRunway(runway: IRunway) {
    runway.mediator = this
    this.runways.set(runway.id, runway)
    return this
  }

  removeRunway(runway: IRunway) {
    runway.mediator = null
    this.runways.delete(runway.id)
    return this
  }
}
