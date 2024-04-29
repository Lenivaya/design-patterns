import { Option } from '@/lib/types.js'

export const isSome = <T>(x: Option<T>): x is Exclude<T, null | undefined> =>
  x !== null && x !== undefined

export const isNone = <T>(x: Option<T>): x is null | undefined => !isSome(x)

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))
