import { PositionToLatLng } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class DomMarker {
  constructor(map, options) {
    const { position, children, ...others } = options;
    this.marker = new H.map.DomMarker(PositionToLatLng(position), {
      icon: new H.map.DomIcon(renderToDiv(children)),
    });
    this.map = map;
    this.map.addObject(this.marker);
  }

  remove() {
    this.map.removeObject(this.marker);
  }
}