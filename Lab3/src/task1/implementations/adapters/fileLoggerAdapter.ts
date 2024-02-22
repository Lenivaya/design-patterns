import { IFileWriter, ILogger } from '@/task1/interfaces/index.js'

export class FileLoggerAdapter implements ILogger {
  constructor(
    public fileWriter: IFileWriter,
    private logFile: string = 'log.txt'
  ) {}

  async log(message: string): Promise<void> {
    await this.fileWriter.writeLine(this.logFile, `LOG: ${message}`)
  }

  async error(message: string): Promise<void> {
    await this.fileWriter.writeLine(this.logFile, `ERROR: ${message}`)
  }

  async warn(message: string): Promise<void> {
    await this.fileWriter.writeLine(this.logFile, `WARN: ${message}`)
  }
}
