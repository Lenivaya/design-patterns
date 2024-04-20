import { IMemento } from '@/task5/interfaces/IMemento'

export class BasicMemento<TValue> implements IMemento<TValue> {
  constructor(
    private readonly state: TValue,
    public readonly dateCreated = new Date()
  ) {}

  public getState(): TValue {
    return this.state
  }
}
