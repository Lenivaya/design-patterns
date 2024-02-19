import { ILaptop } from '@/task2/interfaces/ILaptop.js'
import { INetbook } from '@/task2/interfaces/INetbook.js'
import { IEbook } from '@/task2/interfaces/IEbook.js'
import { ISmartphone } from '@/task2/interfaces/ISmartphone.js'

export interface IDeviceFactory {
  createLaptop(): ILaptop

  createNetbook(): INetbook

  createEbook(): IEbook

  createSmartphone(): ISmartphone
}
