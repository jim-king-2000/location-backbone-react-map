
export default mapVendor => {
  switch(mapVendor) {
    case 'RBMap':
      return import('../hal/domestic/bmap');
    case 'RQQMap':
      return import('../hal/domestic/qqmap');
    case 'RBingMap':
        return import('../hal/international/bingmap');
    case 'RGoogleMap':
        return import('../hal/international/googlemap');
    case 'RMapBoxGL':
      return import('../hal/international/mapbox-gl');
    case 'RHereMap':
      return import('../hal/international/heremap');
    case 'RSogouMap':
      return import('../hal/domestic/sogoumap');
    case 'RTianMap':
      return import('../hal/domestic/tianditu');
    case 'RAMap':
    default:
      return import('../hal/domestic/amap');
  }
}