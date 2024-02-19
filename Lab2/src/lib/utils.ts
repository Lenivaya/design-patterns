export const getRandomElement = <T>(arr: ReadonlyArray<T>): Option<T> =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : null

export type Option<T> = null | T
