
export function getBackgroundSize(max: number, value: number) {
  return { backgroundSize: `${(value * 100) / max}% 100%` };
};
