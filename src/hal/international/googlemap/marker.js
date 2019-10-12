import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, position, options) {
    this.marker = new google.maps.Marker({
      map,
      icon: {
        path: options.svgIcon,
        fillColor: options.fillColor || 'currentColor',
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: options.angle,
        scale : 0.6,
        anchor: new google.maps.Point(24, 24)
      },
      position: PositionToLatLng(position),
      ...options,
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLatLng(position));
  }

  setAngle(angle) {
    const icon = this.marker.getIcon();
    icon.rotation = angle;
    this.marker.setIcon(icon);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.marker && this.marker.setMap(null);
  }
}