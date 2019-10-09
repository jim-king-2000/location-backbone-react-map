import { AMap } from '../hal/domestic/amap';
import { BMap } from '../hal/domestic/bmap';
import { TMap } from '../hal/domestic/tmap';
import { SogouMap } from '../hal/domestic/sogoumap';
import { TianMap } from '../hal/domestic/tianditu';
import { BingMap } from '../hal/international/bingmap';
import { GoogleMap } from '../hal/international/googlemap';
import { HereMap } from '../hal/international/heremap';
import { MapBox } from '../hal/international/mapbox';

const MapClasses = {
  AMap,
  BMap,
  TMap,
  BingMap,
  GoogleMap,
  SogouMap,
  TianMap,
  HereMap,
  MapBox,
};

export default mapVendor => {
  const mapClass = MapClasses[mapVendor];
  return mapClass || AMap;
}