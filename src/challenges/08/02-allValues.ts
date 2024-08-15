import { Equal, Expect } from '../../helpers';

/**
 * Implement an `AllValues` generic that
 * takes a union of objects, and returns
 * every possible value these objects can
 * hold inside any of their properties.
 */

type AllValues<T> = TODO;

// DO NOT CHANGE THE CODE BELOW
type res1 = AllValues<{ a: 'value a' }>;
type test1 = Expect<Equal<res1, 'value a'>>;

type res2 = AllValues<{ a: 'value a' } | { b: 'value b' }>;
type test2 = Expect<Equal<res2, 'value a' | 'value b'>>;

type res3 = AllValues<{ a: string; b: number } | { b: boolean; c: bigint }>;
type test3 = Expect<Equal<res3, string | number | boolean | bigint>>;
