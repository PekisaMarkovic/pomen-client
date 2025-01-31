export function formatText({
  noWrap,
  preWrap,
  textTransform
}: {
  noWrap?: boolean;
  preWrap?: boolean;
  textTransform?: "uppercase" | "lowercase";
}) {
  const style = [];

  if (noWrap) style.push("truncate");
  if (preWrap) style.push("whitespace-pre-wrap");
  if (textTransform) style.push(textTransform);

  return style.join(" ");
}
