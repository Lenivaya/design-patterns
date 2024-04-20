import { IHelpShower, IPrompter } from '@/task1/interfaces'
import { Console } from '@/task1/implementations'

export class MainMenu implements IHelpShower, IPrompter {
  showHelp() {
    console.log(`
      What service do you need?
        1. Buy food
        2. Sell soul
        3. Order delivery
        4. Order subscription
        
        _ (any other) try again
    `)

    return this
  }

  promptUser(): Promise<string> {
    return Console.userInput('your choose: ')
  }
}
