import { PositionToLngLat } from './utils';

export class Marker {
  constructor(map, position, options) {
    AMapUI.load(['lib/utils', 'ui/overlay/SvgMarker'], (utils, SvgMarker) => {
      function CarTopViewShape(opts) {
        opts = utils.extend({
          sourcePath: {
            path: options.svgIcon,
            width: 47.032,
            height: 47.032
          }
        }, opts);
        CarTopViewShape.__super__.constructor.call(this, opts);
      }
      utils.inherit(CarTopViewShape, SvgMarker.Shape.PathShape);

      const shape = new CarTopViewShape({
        height: 30,
        fillColor: options.fillColor || 'currentColor',
        strokeWidth: 0,
      });
      this.marker = new SvgMarker(
        shape,
        {
          map,
          ...options,
          position: PositionToLngLat(position)
        }
      );
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLngLat(position));
  }

  setOptions(options) {
    this.marker.setAngle(options.angle);
    this.marker.setTitle(options.title);
  }

  remove() {
    this.marker && this.marker.setMap(null);
  }
}