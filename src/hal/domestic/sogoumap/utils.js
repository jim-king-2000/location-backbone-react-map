
export function PositionToLatLng(position) {
  return new sogou.maps.LatLng(position.latitude, position.longitude);
}