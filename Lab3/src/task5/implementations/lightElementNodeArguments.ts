import { ILightElementNodeArguments } from '@/task5/index.js'

export class LightElementNodeArguments implements ILightElementNodeArguments {
  constructor(
    public tagName: string,
    public selfClosing: boolean = false,
    public displayType: 'block' | 'inline' = 'block',
    public classes: string[] = []
  ) {}
}
