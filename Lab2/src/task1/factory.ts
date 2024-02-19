import {
  AppSubscriptions,
  DomesticSubscription,
  EducationalSubscription,
  PremiumSubscription
} from '@/task1/subscription.js'
import { getRandomElement } from '@/lib/utils.js'
import { ISubscription } from '@/task1/interfaces/ISubscription.js'

interface ISubscriptionFactory {
  createSubscription(): ISubscription
}

export class WebSite implements ISubscriptionFactory {
  createSubscription(): ISubscription {
    console.log(`
      Here goes some very long code with logic of handling 
      user choose for a subscription on the website level, 
      I hope it works really well.
    `)
    const chosenSubscription = getRandomElement(AppSubscriptions)

    switch (chosenSubscription) {
      case 'Domestic':
        return new DomesticSubscription()
      case 'Educational':
        return new EducationalSubscription()
      case 'Premium':
        return new PremiumSubscription()
      default:
        return new DomesticSubscription()
    }
  }
}

export class MobileApp implements ISubscriptionFactory {
  createSubscription(): ISubscription {
    console.log(`
      Here goes some very long code with logic of handling 
      user choose for a subscription on the mobile app level, 
      I hope it works really well.
    `)
    const chosenSubscription = getRandomElement(AppSubscriptions)

    switch (chosenSubscription) {
      case 'Domestic':
        return new DomesticSubscription()
      case 'Educational':
        return new EducationalSubscription()
      case 'Premium':
        return new PremiumSubscription()
      default:
        return new DomesticSubscription()
    }
  }
}

export class ManagerCall implements ISubscriptionFactory {
  createSubscription(): ISubscription {
    console.log(`
      Here goes some very long code with logic of handling 
      user choose for a subscription on the phone call level, 
      I hope it works really well.
    `)
    const chosenSubscription = getRandomElement(AppSubscriptions)

    switch (chosenSubscription) {
      case 'Domestic':
        return new DomesticSubscription()
      case 'Educational':
        return new EducationalSubscription()
      case 'Premium':
        return new PremiumSubscription()
      default:
        return new DomesticSubscription()
    }
  }
}
