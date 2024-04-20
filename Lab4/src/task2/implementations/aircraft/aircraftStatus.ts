import { IRunway } from '@/task2/types/interfaces/IRunway'

export type AircraftStatus =
  | {
      kind: 'On-runway'
      currentRunway: IRunway
    }
  | {
      kind: 'Landed'
      currentRunway: IRunway
    }
  | {
      kind: 'In-air'
      flightRaceName: string
    }
