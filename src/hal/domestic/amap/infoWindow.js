import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new AMap.InfoWindow({
      ...others,
      closeWhenClickMap: true,
      visible: true,
      autoMove: true,
      content: renderToDiv(children),
    });
    this.infoWindow.open(map, PositionToLngLat(position));
  }

  remove() {
    this.infoWindow && this.infoWindow.close();
  }
}