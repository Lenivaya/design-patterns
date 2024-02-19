export interface ISubscription {
  readonly name: string
  monthlyFee: number
  minSubscriptionPeriod: number
  availableChannels: string[]
  availableFunctionalities: string[]
}
