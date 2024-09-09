function simplifyPath(path: string): string {
  const stack: string[] = [];
  const pathArr = path.split("/");

  for (const item of pathArr) {
    if (item === "." || !item.trim()) {
      continue;
    } else if (item === "..") {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  return "/" + stack.join("/");
}
