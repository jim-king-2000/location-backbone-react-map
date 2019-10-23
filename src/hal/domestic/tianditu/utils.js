
export function PositionToLngLat(position) {
  return position && new T.LngLat(position.longitude, position.latitude);
}