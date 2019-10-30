
const MapClasses = {
  RAMap: import('../hal/domestic/amap'),
  RBMap: import('../hal/domestic/bmap'),
  RQQMap: import('../hal/domestic/qqmap'),
  RBingMap: import('../hal/international/bingmap'),
  RGoogleMap: import('../hal/international/googlemap'),
  RSogouMap: import('../hal/domestic/sogoumap'),
  RTianMap: import('../hal/domestic/tianditu'),
  RHereMap: import('../hal/international/heremap'),
  RMapBoxGL: import('../hal/international/mapbox-gl'),
};

export default mapVendor => {
  const mapClass = MapClasses[mapVendor];
  return mapClass || RAMap;
}