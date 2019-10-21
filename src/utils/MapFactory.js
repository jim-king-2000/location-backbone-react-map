import { RAMap } from '../hal/domestic/amap';
import { RBMap } from '../hal/domestic/bmap';
import { RTMap } from '../hal/domestic/tmap';
import { RQQMap } from '../hal/domestic/qqmap';
import { RSogouMap } from '../hal/domestic/sogoumap';
import { RTianMap } from '../hal/domestic/tianditu';
import { RBingMap } from '../hal/international/bingmap';
import { RGoogleMap } from '../hal/international/googlemap';
import { RHereMap } from '../hal/international/heremap';
import { RMapBox } from '../hal/international/mapbox';
import { RMapBoxGL } from '../hal/international/mapbox-gl';

const MapClasses = {
  RAMap,
  RBMap,
  RQQMap,
  RBingMap,
  RGoogleMap,
  RSogouMap,
  RTianMap,
  RHereMap,
  RMapBoxGL,
};

export default mapVendor => {
  const mapClass = MapClasses[mapVendor];
  return mapClass || RAMap;
}