import { IAircraft } from '@/task2/types/interfaces/IAircraft'

export type CommandCenterMessage =
  | {
      kind: 'TakeOffAirCraft'
      payload: {
        airCraft: IAircraft
        flightRaceName: string
        runwayId: string
      }
    }
  | {
      kind: 'LandAirCraft'
      payload: {
        airCraft: IAircraft
        flightRaceName: string
        runwayId: string
      }
    }
