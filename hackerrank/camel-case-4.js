const regexs = {
  paranthesis: /[(|)]/g,
  uppercase: /[A-Z]/g,
};

const pipe = (value, ...funcs) => {
  let val = value;
  for (const func of funcs) {
    val = func(val);
  }
  return val;
};

const removeParanthesis = (str) => str.replace(regexs.paranthesis, "");
const splitCapitalized = (str) =>
  str.replace(regexs.uppercase, (str) => " " + str);
const lowercase = (str) => str.toLowerCase();
const combineWords = (str) => str.split(" ").join("");
const capitalizeFirst = (startIndex) => (str) =>
  str
    .split(" ")
    .map((substr, i) =>
      i >= startIndex
        ? substr.slice(0, 1).toUpperCase() + substr.slice(1)
        : substr
    )
    .join(" ");
const addParanthesis = (str) => str + "()";
const trim = (str) => str.trim();

const config = {
  S: {
    M: (str) => pipe(str, removeParanthesis, splitCapitalized, lowercase, trim),
    V: (str) => pipe(str, splitCapitalized, lowercase, trim),
    C: (str) => pipe(str, splitCapitalized, lowercase, trim),
  },
  C: {
    M: (str) =>
      pipe(str, capitalizeFirst(1), combineWords, addParanthesis, trim),
    V: (str) => pipe(str, capitalizeFirst(1), combineWords, trim),
    C: (str) => pipe(str, capitalizeFirst(0), combineWords, trim),
  },
};

function processData(input) {
  //Enter your code here
  const lines = input.split("\n");
  for (const line of lines) {
    const tokens = line.split(";");
    const result = config[tokens[0]][tokens[1]](tokens[2].trim());
    console.log(result);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
