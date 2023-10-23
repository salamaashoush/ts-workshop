
type Compute<T> = { [K in keyof T]: Compute<T[K]> } | never;

export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type Expect<a extends true> = a;
