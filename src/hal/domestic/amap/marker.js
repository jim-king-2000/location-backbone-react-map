
function PositionToLngLat(position) {
  return new window.AMap.LngLat(position.longitude, position.latitude);
}

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

  setAngle(angle) {
    this.marker.setAngle(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.marker.setMap();
  }
}