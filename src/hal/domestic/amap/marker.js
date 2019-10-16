import { PositionToLngLat } from './utils';

function carTopViewShape(utils, SvgMarker, path) {
  function CarTopViewShape(opts) {
    opts = utils.extend({
      sourcePath: {
        path,
        width: 47.032,
        height: 47.032
      }
    }, opts);
    CarTopViewShape.__super__.constructor.call(this, opts);
  }
  utils.inherit(CarTopViewShape, SvgMarker.Shape.PathShape);
  return CarTopViewShape;
}

export class Marker {
  constructor(map, position, options) {
    if (!options.svgIcon) {
      this.marker = new window.AMap.Marker({
        map,
        ...options,
        position: PositionToLngLat(position),
      });
      return;
    }

    AMapUI.load(['lib/utils', 'ui/overlay/SvgMarker'], (utils, SvgMarker) => {
      const CarTopViewShape = carTopViewShape(
        utils, SvgMarker, options.svgIcon);
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