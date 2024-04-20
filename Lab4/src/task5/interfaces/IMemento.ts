export interface IMemento<TState> {
  getState(): TState

  readonly dateCreated: Date
}
