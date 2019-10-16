import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    this.marker = new google.maps.Marker({
      map,
      icon: others.svgIcon && {
        path: others.svgIcon,
        fillColor: others.fillColor || 'currentColor',
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: others.angle,
        scale : 0.6,
        anchor: new google.maps.Point(24, 24)
      },
      ...others,
      position: PositionToLatLng(position),
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLatLng(position));
  }

  setOptions(options) {
    const icon = this.marker.getIcon();
    icon.rotation = options.angle;
    this.marker.setIcon(icon);
    this.marker.setTitle(options.title);
  }

  remove() {
    this.marker && this.marker.setMap(null);
  }
}