export function trimString(input: string) {
  return input.length <= 160 ? input : input.substring(0, 160);
}
