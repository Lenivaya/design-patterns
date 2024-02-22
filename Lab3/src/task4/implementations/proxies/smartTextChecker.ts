import { ITextReader } from '@/task4/interfaces/index.js'
import { SmartTextReader } from '@/task4/implementations/smartTextReader.js'
import { FileContents } from '@/task4/types.js'

export class SmartTextChecker implements ITextReader {
  constructor(protected reader: ITextReader = new SmartTextReader()) {}

  async readText(filePath: string): Promise<FileContents> {
    console.log(`Opening file: ${filePath}`)
    const result = await this.reader.readText(filePath)
    console.log(`Reading file: ${filePath}`)
    console.log(`Total lines: ${result.length}`)
    console.log(
      `Total characters: ${result.reduce((acc, line) => acc + line.length, 0)}`
    )
    console.log(`Closing file: ${filePath}`)
    console.log('Result', result)
    return result
  }
}
