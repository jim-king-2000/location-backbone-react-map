
const MapClasses = {
  RAMap: '../hal/domestic/amap',
  RBMap: '../hal/domestic/bmap',
  RQQMap: '../hal/domestic/qqmap',
  RBingMap: '../hal/international/bingmap',
  RGoogleMap: '../hal/international/googlemap',
  RSogouMap: '../hal/domestic/sogoumap',
  RTianMap: '../hal/domestic/tianditu',
  RHereMap: '../hal/international/heremap',
  RMapBoxGL: '../hal/international/mapbox-gl',
};

export default mapVendor => {
  const mapClass = MapClasses[mapVendor];
  return import(mapClass || RAMap);
}