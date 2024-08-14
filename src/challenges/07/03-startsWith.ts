/**
 * Implement a `StartsWith` generic that takes
 * 2 string literals, and returns true if the
 * first string starts with the second one.
 */
type StartsWith<Str, Start> = TODO;

// DO NOT CHANGE THE CODE BELOW
type res1 = StartsWith<'getUsers', 'get'>;
type test1 = Expect<Equal<res1, true>>;

type res2 = StartsWith<'getArticles', 'post'>;
type test2 = Expect<Equal<res2, false>>;

type res3 = StartsWith<'Type-Level Programming!', 'Type'>;
type test3 = Expect<Equal<res3, true>>;
