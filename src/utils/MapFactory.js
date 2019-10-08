import { AMap } from '../hal/domestic/amap';
import { BMap } from '../hal/domestic/bmap';
import { TMap } from '../hal/domestic/tmap';
import { BingMap } from '../hal/international/bingmap';

export default mapVendor => {
  if (!mapVendor) return AMap;

  if ('AMap' === mapVendor) return AMap;
  if ('BMap' === mapVendor) return BMap;
  if ('TMap' === mapVendor) return TMap;
  if ('BingMap' === mapVendor) return BingMap;
}