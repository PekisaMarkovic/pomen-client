import { Spacing } from "@/interfaces/general";

export function spacing(
  type: "padding" | "margin",
  { b, l, r, t }: { t?: Spacing; b?: Spacing; l?: Spacing; r?: Spacing }
) {
  if (type === "margin") return marginSpacing({ mb: b, ml: l, mr: r, mt: t });

  return paddingSpacing({ pb: b, pl: l, pr: r, pt: t });
}

function marginSpacing({
  mb,
  mt,
  ml,
  mr,
}: {
  mt?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mr?: Spacing;
}) {
  const styles = [];
  let top = "";
  let bottom = "";
  let right = "";
  let left = "";

  if (mt) {
    top = `mt-${mt}`;
  }
  if (mb) {
    bottom = `mb-${mb}`;
  }
  if (mr) {
    right = `mr-${mr}`;
  }
  if (ml) {
    left = `ml-${ml}`;
  }

  if (top) styles.push(top);
  if (bottom) styles.push(bottom);
  if (right) styles.push(right);
  if (left) styles.push(left);

  return styles.join(" ");
}

function paddingSpacing({
  pb,
  pl,
  pr,
  pt,
}: {
  pt?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  pr?: Spacing;
}) {
  const styles = [];
  let top = "";
  let bottom = "";
  let right = "";
  let left = "";

  if (pt) {
    top = `pt-${pt}`;
  }
  if (pb) {
    bottom = `pb-${pb}`;
  }
  if (pr) {
    right = `pr-${pr}`;
  }
  if (pl) {
    left = `pl-${pl}`;
  }

  if (top) styles.push(top);
  if (bottom) styles.push(bottom);
  if (right) styles.push(right);
  if (left) styles.push(left);

  return styles.join(" ");
}
