import { IFlyweight } from '@/task6/interfaces/IFlyweight.js'
import {
  ILightElementNodeArguments,
  LightElementNodeArguments
} from '@/task5/index.js'
import { isSome } from '@/lib/utils.js'

export class FlyweightElementNodeArgumentsFactory
  implements IFlyweight<ILightElementNodeArguments, ILightElementNodeArguments>
{
  private flyweightsCache: Map<string, ILightElementNodeArguments> = new Map()

  constructor(initialFlyweights?: ILightElementNodeArguments[]) {
    if (isSome(initialFlyweights)) {
      for (const initialFlyweight of initialFlyweights) {
        this.flyweightsCache.set(
          this.getCacheKey(initialFlyweight),
          initialFlyweight
        )
      }
    }
  }

  getCacheKey(args: ILightElementNodeArguments): string {
    return `${args.tagName}-${args.selfClosing}-${args.displayType}-${args.classes.join('-')}`
  }

  getFlyweight(args: ILightElementNodeArguments): ILightElementNodeArguments {
    const cacheKey = this.getCacheKey(args)

    if (!this.flyweightsCache.has(cacheKey))
      this.flyweightsCache.set(
        cacheKey,
        new LightElementNodeArguments(
          args.tagName,
          args.selfClosing,
          args.displayType,
          args.classes
        )
      )

    return this.flyweightsCache.get(cacheKey) as ILightElementNodeArguments
  }

  get cacheSize() {
    return this.flyweightsCache.size
  }
}
