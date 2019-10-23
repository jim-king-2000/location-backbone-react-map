
export function PositionToLatLng(position) {
  return position && {
    lat: position.latitude,
    lng: position.longitude,
  };
}