import tinyColor from 'tinycolor2';

export function transformColorToRgb(color, opacity) {
  const strokeColor = tinyColor(color);
  if (opacity) strokeColor.setAlpha(opacity);
  return strokeColor.toRgbString();
}

export function transformColorToRgbObject(color, opacity) {
  const strokeColor = tinyColor(color);
  if (opacity) strokeColor.setAlpha(opacity);
  return strokeColor.toRgb();
}