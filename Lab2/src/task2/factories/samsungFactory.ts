import {
  IDeviceFactory,
  IEbook,
  ILaptop,
  INetbook,
  ISmartphone
} from '@/task2/interfaces/index.js'
import {
  SamsungEbook,
  SamsungLaptop,
  SamsungNetbook,
  SamsungSmartphone
} from '@/task2/devices/samsung.js'

export class SamsungFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new SamsungLaptop()
  }

  createNetbook(): INetbook {
    return new SamsungNetbook()
  }

  createEbook(): IEbook {
    return new SamsungEbook()
  }

  createSmartphone(): ISmartphone {
    return new SamsungSmartphone()
  }
}
