type Compute<T> = T extends
  | Function
  | RegExp
  | Date
  | Generator<unknown, any, unknown>
  | {
      readonly [Symbol.toStringTag]: string;
    }
  ? T
  : { [K in keyof T]: Compute<T[K]> };

export type Equal<X, Y> =
  (<T>() => T extends Compute<X> ? 1 : 2) extends <T>() => T extends Compute<Y> ? 1 : 2 ? true : false;

export type Expect<T extends true> = T;
