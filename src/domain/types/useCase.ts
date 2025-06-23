export interface UseCase<A, R> {
  execute: (arg: A) => R
}
