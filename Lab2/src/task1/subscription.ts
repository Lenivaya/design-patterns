import { ISubscription } from '@/task1/interfaces/index.js'

export const AppSubscriptions = ['Domestic', 'Educational', 'Premium'] as const
export type AppSubscription = (typeof AppSubscriptions)[number]

export abstract class Subscription implements ISubscription {
  protected constructor(
    public readonly name: AppSubscription,
    public monthlyFee: number,
    public minSubscriptionPeriod: number,
    public availableChannels: string[],
    public availableFunctionalities: string[]
  ) {}
}

export class DomesticSubscription extends Subscription {
  constructor() {
    super(
      'Domestic',
      5,
      1,
      ['News', 'Entertainment', 'Sports', 'Lifestyle'],
      ['Live Streaming', 'On-demand Streaming']
    )
  }
}

export class EducationalSubscription extends Subscription {
  constructor() {
    super(
      'Educational',
      10,
      2,
      ['Educational Channels', 'Documentary Channels', 'Kids Channels'],
      ['Interactive Program Guide', 'Parental Controls']
    )
  }
}

export class PremiumSubscription extends Subscription {
  constructor() {
    super(
      'Premium',
      20,
      3,
      ['HD Channels', '4K Channels', 'On-demand Channels'],
      ['Recommendations', 'Watchlist', 'DVR', 'Watch later']
    )
  }
}
