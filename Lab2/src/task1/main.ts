import { ManagerCall, MobileApp, WebSite } from '@/task1/index.js'

const website = new WebSite()
const mobileApp = new MobileApp()
const managerCall = new ManagerCall()

const factories = [website, mobileApp, managerCall]
factories
  .map((factory) => factory.createSubscription())
  .forEach((subscription) => console.log(subscription))
