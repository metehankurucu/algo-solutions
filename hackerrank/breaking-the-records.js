"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Write your code here
  let minBreakCount = 0;
  let maxBreakCount = 0;
  let min = scores[0];
  let max = scores[0];

  for (const score of scores) {
    if (score < min) {
      minBreakCount += 1;
      min = score;
    } else if (score > max) {
      maxBreakCount += 1;
      max = score;
    }
  }

  return [maxBreakCount, minBreakCount];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const scores = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
