
export function PositionToLngLat(position) {
  return new window.AMap.LngLat(position.longitude, position.latitude);
}