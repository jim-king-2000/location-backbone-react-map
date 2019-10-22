
export function PositionToLngLat(position) {
  return position && new AMap.LngLat(position.longitude, position.latitude);
}