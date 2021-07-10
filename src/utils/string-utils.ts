function removeStartingAndEndingDoubleQuotes(string: string | null): string | undefined {
  let alteredString;
  const startingAndEndingDoubleQuotesPattern = /^"(.*)"$/;

  if (string && startingAndEndingDoubleQuotesPattern.test(string)) {
    alteredString = (string as string).substring(1, string.length - 1);
  } else if (string) {
    alteredString = string;
  } else if (string === null) {
    alteredString = undefined;
  }

  return alteredString;
}

export { removeStartingAndEndingDoubleQuotes };
