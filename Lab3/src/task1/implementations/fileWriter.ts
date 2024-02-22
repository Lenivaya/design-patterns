import { IFileWriter } from '@/task1/interfaces/index.js'
import { appendFile } from 'fs/promises'

export class FileWriter implements IFileWriter {
  async write(fileName: string, content: string): Promise<void> {
    await appendFile(fileName, content)
  }

  async writeLine(fileName: string, content: string): Promise<void> {
    const fileContent = `${content}\n`
    await this.write(fileName, fileContent)
  }
}
