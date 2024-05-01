export interface IStateContext<TState> {
  state: TState

  transition(state: TState): void
}
