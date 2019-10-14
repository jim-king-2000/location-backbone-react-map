import { PositionToLocation } from './utils';
import { buildSVGMarkup } from '../../../utils/svg';

export class Marker {
  constructor(map, position, options) {
    this.marker = new Microsoft.Maps.Pushpin(PositionToLocation(position), {
      icon: `<svg
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
      </svg>`,
      ...options,
      anchor: new Microsoft.Maps.Point(15, 15)
    });

    // const canvas = document.createElement('canvas');
    // canvas.width = 47;
    // canvas.height = 47;
    // const ctx = canvas.getContext('2d');
    // ctx.rotate(options.angle * Math.PI / 180);
    // ctx.stroke(new Path2D(options.svgIcon));
    // this.marker = new Microsoft.Maps.Pushpin(PositionToLocation(position), {
    //   icon: canvas.toDataURL(),
    //   ...options,
    //   anchor: new Microsoft.Maps.Point(15, 15)
    // });
    map.entities.push(this.marker);
    this.map = map;
  }

  setPosition(position) {
    this.marker.setLocation(PositionToLocation(position));
  }

  setAngle(angle) {
    // this.marker.setAngle(angle);
  }

  setTitle(title) {
    this.marker.setOptions({ title });
  }

  remove() {
    this.map.entities.remove(this.marker);
  }
}