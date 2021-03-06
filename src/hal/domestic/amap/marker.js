import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';

function carTopViewShape(utils, SvgMarker, svgIcon) {
  function CarTopViewShape(opts) {
    opts = utils.extend({
      sourcePath: {
        path: svgIcon.path,
        width: svgIcon.viewWidth,
        height: svgIcon.viewHeight,
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
      height: options.svgIcon.height,
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
  #marker;

  constructor(map, options) {
    const { position, children, events, ...others } = options;
    const markerOptions = {
      map,
      position: PositionToLngLat(position),
      ...others,
    };

    if (others.svgIcon) {
      createSvgMarker(
        map,
        position,
        others,
        marker => this.#setMarkerAndEvents(marker, events));
      return;
    }

    if (children) {
      markerOptions.content = renderToDiv(children);
      markerOptions.anchor = 'center';
      markerOptions.offset = new AMap.Pixel(0, 0);
    }
    this.#setMarkerAndEvents(new AMap.Marker(markerOptions), events);
  }

  #setMarkerAndEvents(marker, events) {
    this.#marker = marker;
    events && Object.entries(events).forEach(
      ([key, value]) => marker.on(key, value)
    );
  }

  setOptions(options) {
    if (!this.#marker) return;
    this.#marker.setAngle(options.angle);
    this.#marker.setTitle(options.title);
    this.#marker.setPosition(PositionToLngLat(options.position));
  }

  remove() {
    this.#marker && this.#marker.setMap(null);
  }
}