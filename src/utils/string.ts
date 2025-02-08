export function trimStringSEODescription(input: string) {
  return input.length <= 160 ? input : input.substring(0, 160);
}
