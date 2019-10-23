
export function PositionToLatLng(position) {
  return position && [
    position.latitude,
    position.longitude,
  ];
}