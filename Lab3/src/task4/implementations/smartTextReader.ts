import { ITextReader } from '@/task4/interfaces/index.js'
import { FileContents } from '@/task4/types.js'
import { readFile } from 'fs/promises'

export class SmartTextReader implements ITextReader {
  async readText(filePath: string): Promise<FileContents> {
    const data = await readFile(filePath, 'utf-8')
    return data.split('\n').map((line) => line.split(''))
  }
}
