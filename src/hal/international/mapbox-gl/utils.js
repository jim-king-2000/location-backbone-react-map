
export function PositionToLngLat(position) {
  return position && [
    position.longitude,
    position.latitude,
  ];
}