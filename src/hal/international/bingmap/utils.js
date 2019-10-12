
export function PositionToLocation(position) {
  return new Microsoft.Maps.Location(position.latitude, position.longitude);
}