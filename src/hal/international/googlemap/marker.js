import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, options) {
    const { position, events, ...others } = options;
    this.marker = new google.maps.Marker({
      map,
      icon: others.svgIcon && {
        path: others.svgIcon.path,
        fillColor: others.fillColor || 'currentColor',
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: others.angle,
        scale : 0.6,
        anchor: new google.maps.Point(
          others.svgIcon.viewWidth / 2,
          others.svgIcon.viewHeight / 2)
      },
      ...others,
      position: PositionToLatLng(position),
    });
    events && Object.entries(events).forEach(
      ([key, value]) => this.marker.addListener(key, value)
    );
  }

  setOptions(options) {
    const icon = this.marker.getIcon();
    icon.rotation = options.angle;
    this.marker.setIcon(icon);
    this.marker.setTitle(options.title);
    this.marker.setPosition(PositionToLatLng(options.position));
  }

  remove() {
    this.marker && this.marker.setMap(null);
  }
}