import { AMap } from '../hal/domestic/amap';
import { BMap } from '../hal/domestic/bmap';
import { TMap } from '../hal/domestic/tmap';
import { SougouMap } from '../hal/domestic/sougoumap';
import { BingMap } from '../hal/international/bingmap';
import { GoogleMap } from '../hal/international/googlemap';

const MapClasses = {
  AMap,
  BMap,
  TMap,
  BingMap,
  GoogleMap,
  SougouMap,
};

export default mapVendor => {
  const mapClass = MapClasses[mapVendor];
  return mapClass || AMap;
}