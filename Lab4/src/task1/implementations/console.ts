import readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

export class Console {
  private static consoleReadline = readline.createInterface({
    input: stdin,
    output: stdout
  })

  static userInput(prompt: string): Promise<string> {
    return this.consoleReadline.question(prompt)
  }
}
