/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  // Write your code here
  const table = {};

  for (const string of strings) {
    if (table.hasOwnProperty(string)) table[string] = table[string] + 1;
    else table[string] = 1;
  }

  return queries.map((query) => table[query] ?? 0);
}
