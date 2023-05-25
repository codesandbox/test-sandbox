function countCharacters(strings: string[]): number {
  let count = 0;
  strings.forEach((str) => {
    count += str.length;
  });
  return count;
}

export { countCharacters };
