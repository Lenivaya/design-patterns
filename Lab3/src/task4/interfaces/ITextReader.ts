import { FileContents } from '@/task4/types.js'

export interface ITextReader {
  readText(filePath: string): Promise<FileContents>
}
