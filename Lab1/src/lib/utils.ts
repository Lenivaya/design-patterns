export type Option<T> = null | T

export const isSome = <T>(x: T): x is Exclude<T, null | undefined> =>
  x !== null && x !== undefined
export const isNone = <T>(x: T) => !isSome(x)
