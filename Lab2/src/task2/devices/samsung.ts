import { Device } from '@/task2/devices/device.js'
import {
  IEbook,
  ILaptop,
  INetbook,
  ISmartphone
} from '@/task2/interfaces/index.js'

export class SamsungLaptop extends Device implements ILaptop {
  constructor() {
    super('Galaxy Book', 'Samsung', 16, 512)
  }
}

export class SamsungNetbook extends Device implements INetbook {
  constructor() {
    super('Netbook', 'Samsung', 8, 256)
  }
}

export class SamsungEbook extends Device implements IEbook {
  constructor() {
    super('Galaxy Tab', 'Samsung', 8, 256)
  }
}

export class SamsungSmartphone extends Device implements ISmartphone {
  constructor() {
    super('Galaxy Phone', 'Samsung', 8, 256)
  }
}
