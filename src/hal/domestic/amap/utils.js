
export function PositionToLngLat(position) {
  return new AMap.LngLat(position.longitude, position.latitude);
}