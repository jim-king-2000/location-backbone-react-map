
export function PositionToLatLng(position) {
  return new google.maps.LatLng(position.latitude, position.longitude);
}