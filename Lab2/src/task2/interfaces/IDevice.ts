export interface IDevice {
  name: string
  producer: string
  ram: number
  storage: number

  work(): void
}
