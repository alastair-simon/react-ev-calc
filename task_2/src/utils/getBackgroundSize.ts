interface BackgroundSizeObject {
  backgroundSize: string;
}

export function getBackgroundSize(
  max: number,
  value: number
): BackgroundSizeObject {
  return { backgroundSize: `${(value * 100) / max}% 100%` };
}
