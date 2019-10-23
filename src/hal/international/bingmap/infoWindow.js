import { PositionToLocation } from './utils';
import { renderToDiv } from '../../../utils/Render';
import { renderToStaticMarkup } from 'react-dom/server';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new Microsoft.Maps.Infobox(PositionToLocation(position), {
      ...others,
      htmlContent: renderToStaticMarkup(children),
    });
    this.infoWindow.setMap(map);
    // events && Object.entries(events).forEach(
    //   ([key, value]) => this.infoWindow.on(key, value)
    // );
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setOptions({
      location: PositionToLocation(position),
      htmlContent: renderToStaticMarkup(children),
    });
  }

  remove() {
    this.infoWindow && this.infoWindow.setMap(null);
  }
}