function isValid(s: string): boolean {
  const config = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack: string[] = [];

  for (const str of s.split("")) {
    if (!config[str]) stack.push(str);
    else {
      if (stack.pop() !== config[str]) return false;
    }
  }

  return stack.length === 0;
}
