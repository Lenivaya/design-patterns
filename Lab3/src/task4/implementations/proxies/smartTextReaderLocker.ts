import { ITextReader } from '@/task4/interfaces/index.js'
import { SmartTextReader } from '@/task4/implementations/smartTextReader.js'
import { FileContents } from '@/task4/types.js'

export class SmartTextReaderLocker implements ITextReader {
  protected reader: ITextReader = new SmartTextReader()

  constructor(protected regex: RegExp) {}

  async readText(filePath: string): Promise<FileContents> {
    if (this.regex.test(filePath)) {
      console.log(`Access denied to file: ${filePath}`)
      return []
    }
    return this.reader.readText(filePath)
  }
}
