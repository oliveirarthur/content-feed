export function formatNumberShortScale(number: number) {
  const abbreviations = ["", "k", "M", "B", "T"];
  const tier = Math.floor(Math.log10(Math.abs(number)) / 3);

  if (tier === 0) return number;

  const suffix = abbreviations[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;
  const fixed = scaled.toFixed(1);
  const numberToDisplay = fixed.endsWith(".0") ? scaled.toFixed(0) : fixed;

  return numberToDisplay + suffix;
}
