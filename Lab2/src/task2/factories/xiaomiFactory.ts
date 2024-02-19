import {
  IDeviceFactory,
  IEbook,
  ILaptop,
  INetbook,
  ISmartphone
} from '@/task2/interfaces/index.js'
import {
  XiaomiEbook,
  XiaomiLaptop,
  XiaomiNetbook,
  XiaomiSmartphone
} from '@/task2/devices/xiaomi.js'

export class XiaomiFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new XiaomiLaptop()
  }

  createNetbook(): INetbook {
    return new XiaomiNetbook()
  }

  createEbook(): IEbook {
    return new XiaomiEbook()
  }

  createSmartphone(): ISmartphone {
    return new XiaomiSmartphone()
  }
}
