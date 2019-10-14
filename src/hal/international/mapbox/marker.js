import { PositionToLatLng } from './utils';
import { buildSVGMarkup } from '../../../utils/svg';

export class Marker {
  constructor(map, position, options) {
    if (!L.RotatedMarker) {
      L.RotatedMarker = L.Marker.extend({
        options: { angle: 0 },
        _setPos: function(pos) {
          L.Marker.prototype._setPos.call(this, pos);
          this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
        }
      });
      L.rotatedMarker = function(pos, options) {
        return new L.RotatedMarker(pos, options);
      };
    }

    this.marker = new L.rotatedMarker(PositionToLatLng(position), {
      angle: options.angle,
      icon: L.divIcon({
        className: 'svg-marker',
        html: buildSVGMarkup(options),
        iconAnchor: [15, 15]
      }),
      ...options
    }).addTo(map);
  }

  setPosition(position) {
    this.marker.setLatLng(PositionToLatLng(position));
  }

  setAngle(angle) {
    this.marker.options.angle = angle;
  }

  setTitle(title) {
    // this.marker.setTitle(title);
  }

  remove() {
    this.marker.remove();
  }
}