
export function PositionToLatLng(position) {
  return position &&
    new google.maps.LatLng(position.latitude, position.longitude);
}