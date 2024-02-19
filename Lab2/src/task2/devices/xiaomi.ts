import { Device } from '@/task2/devices/device.js'
import {
  IEbook,
  ILaptop,
  INetbook,
  ISmartphone
} from '@/task2/interfaces/index.js'

export class XiaomiLaptop extends Device implements ILaptop {
  constructor() {
    super('Mi Book', 'Xiaomi', 16, 512)
  }
}

export class XiaomiNetbook extends Device implements INetbook {
  constructor() {
    super('Mi Netbook', 'Xiaomi', 8, 256)
  }
}

export class XiaomiEbook extends Device implements IEbook {
  constructor() {
    super('Mi Pad', 'Xiaomi', 8, 256)
  }
}

export class XiaomiSmartphone extends Device implements ISmartphone {
  constructor() {
    super('Mi Phone', 'Xiaomi', 8, 256)
  }
}
