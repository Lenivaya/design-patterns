import { ILogger } from '@/task1/interfaces/index.js'
import chalk from 'chalk'

export class Logger implements ILogger {
  log(message: string): void {
    console.log(chalk.green(`[LOG] ${message}`))
  }

  error(message: string): void {
    console.error(chalk.yellow(`[ERROR] ${message}`))
  }

  warn(message: string): void {
    console.warn(chalk.red(`[WARN] ${message}`))
  }
}
