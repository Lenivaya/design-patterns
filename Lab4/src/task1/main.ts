import {
  BuyFoodMenuHandler,
  BuySubscriptionMenuHandler,
  EndMenuContinueExecutionHandler,
  MainMenu,
  OrderDeliveryMenuHandler,
  SellSoulMenuHandler
} from '@/task1'

const mainMenu = new MainMenu()

const buyFoodMenuHandler = new BuyFoodMenuHandler(),
  sellSoulMenuHandler = new SellSoulMenuHandler(),
  orderDeliveryMenuHandler = new OrderDeliveryMenuHandler(),
  buySubscriptionMenuHandler = new BuySubscriptionMenuHandler(),
  endMenuHandlerContinue = new EndMenuContinueExecutionHandler()

const chain = buyFoodMenuHandler
chain
  .addNextHandler(sellSoulMenuHandler)
  .addNextHandler(orderDeliveryMenuHandler)
  .addNextHandler(buySubscriptionMenuHandler)
  .addNextHandler(endMenuHandlerContinue)

while (true) {
  const userRequest = await mainMenu.showHelp().promptUser()
  await chain.handleRequest(userRequest)
}
