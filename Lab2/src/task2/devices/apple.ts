import { Device } from '@/task2/devices/device.js'
import {
  IEbook,
  ILaptop,
  INetbook,
  ISmartphone
} from '@/task2/interfaces/index.js'

export class AppleLaptop extends Device implements ILaptop {
  constructor() {
    super('Macbook', 'Apple', 16, 256)
  }
}

export class AppleNetbook extends Device implements INetbook {
  constructor() {
    super('Macbook air', 'Apple', 8, 256)
  }
}

export class AppleEbook extends Device implements IEbook {
  constructor() {
    super('IPad', 'Apple', 8, 256)
  }
}

export class AppleSmartphone extends Device implements ISmartphone {
  constructor() {
    super('IPhone', 'Apple', 8, 256)
  }
}
