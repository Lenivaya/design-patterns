import { ILightElementNodeArguments } from '@/task3/index.js'
import { v4 as uuidv4 } from 'uuid'

export class LightElementNodeArguments implements ILightElementNodeArguments {
  constructor(
    public tagName: string,
    public selfClosing: boolean = false,
    public displayType: 'block' | 'inline' = 'block',
    public classes: string[] = [],
    public id: string = uuidv4()
  ) {}
}
