import { PositionToLocation } from './utils';

function draw(svgIcon, fillColor, angle) {
  const canvas = document.createElement('canvas');
  canvas.width = 47.032;
  canvas.height = 47.032;
  const ctx = canvas.getContext('2d');
  const offsetX = canvas.width / 2;
  const offsetY = canvas.height / 2;
  ctx.translate(offsetX, offsetY);
  ctx.rotate(angle * Math.PI / 180);
  ctx.scale(0.6, 0.6);
  ctx.translate(-offsetX, -offsetY);
  ctx.fillStyle = fillColor;
  ctx.fill(new Path2D(svgIcon));
  return canvas.toDataURL();
}

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    this.marker = new Microsoft.Maps.Pushpin(PositionToLocation(position), {
      icon: others.svgIcon && draw(
        others.svgIcon, others.fillColor, others.angle),
      ...others,
      anchor: new Microsoft.Maps.Point(24, 24)
    });
    map.entities.push(this.marker);
    this.map = map;
    this.options = others;
  }

  setPosition(position) {
    this.marker.setLocation(PositionToLocation(position));
  }

  setOptions(options) {
    this.marker.setOptions({
      icon: draw(this.options.svgIcon, this.options.fillColor, options.angle),
      title: options.title
    });
  }

  remove() {
    this.map.entities.remove(this.marker);
  }
}