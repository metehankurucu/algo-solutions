/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
  const base2Number = parseInt(n, 10).toString(2).padStart(32, "0");
  const flippedBase2Number = base2Number
    .split("")
    .map((item) => (item === "0" ? "1" : "0"))
    .join("");
  return parseInt(flippedBase2Number, 2);
}
