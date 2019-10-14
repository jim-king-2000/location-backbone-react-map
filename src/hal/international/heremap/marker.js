import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, position, options) {
    const svgMarkup = `<svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
      fill='${options.fill || 'currentColor'}'
      viewBox='0 0 47.032 47.032'
      width='30px'
      height='30px'
    >
      <g>
        <path d='${options.svgIcon}' />
      </g>
    </svg>`;
    this.marker = new H.map.Marker(PositionToLatLng(position), {
      icon: new H.map.Icon(svgMarkup, {
        anchor: {
          x: 15,
          y: 15
        }
      }),
    });
    this.map = map;
    this.map.addObject(this.marker);
  }

  setPosition(position) {
    this.marker.setGeometry(PositionToLatLng(position));
  }

  setAngle(angle) {
    // this.marker.setAngle(angle);
  }

  setTitle(title) {
    // this.marker.setOptions({ title });
  }

  remove() {
    this.map.removeObject(this.marker);
  }
}