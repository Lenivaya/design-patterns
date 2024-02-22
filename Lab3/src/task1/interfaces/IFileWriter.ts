export interface IFileWriter {
  write(fileName: string, content: string): Promise<void>

  writeLine(fileName: string, content: string): Promise<void>
}
