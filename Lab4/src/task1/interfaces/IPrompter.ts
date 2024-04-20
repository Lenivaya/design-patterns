export interface IPrompter {
  promptUser(): Promise<string>
}
