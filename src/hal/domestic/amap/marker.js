import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';

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

function createSvgMarker(map, position, options, assigner) {
  AMapUI.load(['lib/utils', 'ui/overlay/SvgMarker'], (utils, SvgMarker) => {
    const CarTopViewShape = carTopViewShape(
      utils, SvgMarker, options.svgIcon);
    const shape = new CarTopViewShape({
      height: 30,
      fillColor: options.fillColor || 'currentColor',
      strokeWidth: 0,
    });
    assigner && assigner(new SvgMarker(
      shape,
      {
        map,
        ...options,
        position: PositionToLngLat(position)
      }
    ));
  });
}

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    const markerOptions = {
      map,
      ...others,
      position: PositionToLngLat(position),
    };
    if (others.children) {
      markerOptions.content = renderToDiv(others.children);
      markerOptions.anchor = 'center';
      markerOptions.offset = new window.AMap.Pixel(0, 0);
    }
    if (!others.svgIcon) {
      this.marker = new window.AMap.Marker(markerOptions);
      return;
    }

    createSvgMarker(map, position, others, marker => this.marker = marker);
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