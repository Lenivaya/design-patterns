import {
  XiaomiFactory,
  AppleFactory,
  SamsungFactory
} from '@/task2/factories/index.js'

const appleFactory = new AppleFactory()
const xiaomiFactory = new XiaomiFactory()
const samsungFactory = new SamsungFactory()

const devices = [
  appleFactory.createLaptop(),
  xiaomiFactory.createNetbook(),
  samsungFactory.createEbook(),
  appleFactory.createSmartphone()
]

devices.forEach((device) => console.log(device))
