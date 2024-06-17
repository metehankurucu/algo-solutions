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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const time = s.slice(-2);
  const items = s.slice(0, s.length - 2).split(":");

  let hour;

  if (time === "AM")
    hour = Number(items[0]) === 12 ? Number(items[0]) - 12 : items[0];
  else {
    hour = Number(items[0]) === 12 ? items[0] : (Number(items[0]) + 12) % 24;
  }

  return (hour === 0 ? "0" + hour : hour) + ":" + items[1] + ":" + items[2];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
