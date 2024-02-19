import {
  IDeviceFactory,
  IEbook,
  ILaptop,
  INetbook,
  ISmartphone
} from '@/task2/interfaces/index.js'
import {
  AppleEbook,
  AppleLaptop,
  AppleNetbook,
  AppleSmartphone
} from '@/task2/devices/apple.js'

export class AppleFactory implements IDeviceFactory {
  createLaptop(): ILaptop {
    return new AppleLaptop()
  }

  createNetbook(): INetbook {
    return new AppleNetbook()
  }

  createEbook(): IEbook {
    return new AppleEbook()
  }

  createSmartphone(): ISmartphone {
    return new AppleSmartphone()
  }
}
