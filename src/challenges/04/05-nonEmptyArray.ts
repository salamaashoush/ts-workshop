/**
 * Create a generic `NonEmptyArray` type that represents
 * Arrays that contain at least one element.
 */
type NonEmptyArray<T> = [T,...T[]];

function sendMail(addresses: NonEmptyArray<string>) {
  /* ... */
}

// DO NOT CHANGE THE CODE BELOW
sendMail(['123 5th Ave']); // ✅
sendMail(['75 rue Quincampoix', '75003 Paris']); // ✅
// @ts-expect-error
sendMail([]);
//       ^ ❌ `[]` isn't assignable to `NonEmptyList<string>`
