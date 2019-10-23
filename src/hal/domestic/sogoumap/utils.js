
export function PositionToLatLng(position) {
  return position &&
    new sogou.maps.LatLng(position.latitude, position.longitude);
}