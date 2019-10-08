import { AMap } from '../hal/domestic/amap';
import { BMap } from '../hal/domestic/bmap';

export default mapVendor => {
  if (!mapVendor) return AMap;

  if ('amap' === mapVendor) return AMap;
  if ('bmap' === mapVendor) return BMap;
}