
export function PositionToLocation(position) {
  return position &&
    new Microsoft.Maps.Location(position.latitude, position.longitude);
}