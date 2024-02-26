export interface IFlyweight<TFlyweight, TFlyWeightStateArgs> {
  cacheSize: number

  getCacheKey(args: TFlyWeightStateArgs): string

  getFlyweight(args: TFlyWeightStateArgs): TFlyweight
}
