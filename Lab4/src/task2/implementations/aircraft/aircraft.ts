import { v4 as uuidv4 } from 'uuid'
import { isNone, Option } from '@/lib'
import {
  AircraftLandPayload,
  AircraftTakeOffPayload,
  IAircraft
} from '@/task2/types/interfaces/IAircraft'
import {
  ICommandCenterMediator,
  IMediatorComponent
} from 'task2/types/interfaces'

export class Aircraft
  implements IAircraft, IMediatorComponent<ICommandCenterMediator>
{
  constructor(
    public name: string,
    public id: string = uuidv4(),
    public mediator: Option<ICommandCenterMediator> = null
  ) {}

  public async TakeOff(payload: AircraftTakeOffPayload) {
    if (isNone(this.mediator)) return

    await this.mediator.notify({
      kind: 'TakeOffAirCraft',
      payload: {
        airCraft: this,
        ...payload
      }
    })
  }

  public async Land(payload: AircraftLandPayload) {
    if (isNone(this.mediator)) return

    await this.mediator.notify({
      kind: 'LandAirCraft',
      payload: {
        airCraft: this,
        ...payload
      }
    })
  }
}
