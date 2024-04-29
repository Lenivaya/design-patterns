export type Option<T> = T | undefined | null

// export type NestedOmit<T, K extends PropertyKey> = {
//   [P in keyof T as P extends K ? never : P]: NestedOmit<
//     T[P],
//     K extends `${Exclude<P, symbol>}.${infer R}` ? R : never
//   >
// }

export type NestedOmit<T, K extends PropertyKey> = {
  [P in keyof T as P extends K ? never : P]: NestedOmit<
    T[P],
    K extends `${Exclude<P, symbol>}.${infer R}` ? R : never
  >
} extends infer O
  ? { [P in keyof O]: O[P] }
  : never
