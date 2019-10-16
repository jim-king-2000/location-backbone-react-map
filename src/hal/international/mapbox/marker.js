import { PositionToLatLng } from './utils';
import { buildSVGMarkup } from '../../../utils/svg';

function createRotatedMarker() {
  if (!L.RotatedMarker) {
    L.RotatedMarker = L.Marker.extend({
      options: { angle: 0 },
      _setPos: function(pos) {
        L.Marker.prototype._setPos.call(this, pos);
        this._icon.style['transform-origin'] = 'center';
        this._icon.style[L.DomUtil.TRANSFORM] += ` rotate(${this.options.angle}deg)`;
      }
    });
    L.rotatedMarker = function(pos, options) {
      return new L.RotatedMarker(pos, options);
    };
  }
}

export class Marker {
  constructor(map, options) {
    createRotatedMarker();
    const { position, ...others } = options;
    const markerOptions = {
      ...others
    };
    if (others.svgIcon) {
      markerOptions.icon = L.divIcon({
        className: 'svg-marker',
        html: buildSVGMarkup(others),
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
    }
    this.marker = new L.rotatedMarker(
      PositionToLatLng(position), markerOptions).addTo(map);
  }

  setPosition(position) {
    this.marker.setLatLng(PositionToLatLng(position));
  }

  setOptions(options) {
    this.marker.options.angle = options.angle;
  }

  remove() {
    this.marker.remove();
  }
}