import { CommandCenterMessage } from '@/task2/implementations'

export interface IAircraft {
  id: string
  name: string

  TakeOff(payload: AircraftTakeOffPayload): Promise<void>

  Land(payload: AircraftLandPayload): Promise<void>
}

export type AircraftTakeOffPayload = Omit<
  Extract<CommandCenterMessage, { kind: 'TakeOffAirCraft' }>['payload'],
  'airCraft'
>

export type AircraftLandPayload = Omit<
  Extract<CommandCenterMessage, { kind: 'LandAirCraft' }>['payload'],
  'airCraft'
>
