import { IAircraft, IRunway } from '@/task2/types/interfaces/index'

export interface ICommandCenter {
  takeOffAirCraft(
    airCraft: IAircraft,
    flightRaceName: string,
    runwayId: string
  ): Promise<void>

  landAirCraft(
    airCraft: IAircraft,
    flightRaceName: string,
    runwayId: string
  ): Promise<void>

  addRunways(runwaysToAdd: IRunway[]): void

  removeRunways(runwaysToRemove: IRunway[]): void

  addRunway(runway: IRunway): void

  removeRunway(runway: IRunway): void
}
