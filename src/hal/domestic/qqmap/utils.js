
export function PositionToLatLng(position) {
  return position && new qq.maps.LatLng(position.latitude, position.longitude);
}