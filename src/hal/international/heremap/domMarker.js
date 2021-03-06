import { renderToStaticMarkup } from 'react-dom/server';
import { PositionToLatLng } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class DomMarker {
  constructor(map, options) {
    const { position, children, angle, ...others } = options;
    this.marker = new H.map.DomMarker(PositionToLatLng(position), {
      icon: new H.map.DomIcon(renderToStaticMarkup(
        <div>
          <div
            style={{
              transform: `rotate(${angle}deg)`,
              cursor: 'pointer'
            }}
          >
            {children}
          </div>
        </div>
      )),
    });
    this.map = map;
    this.map.addObject(this.marker);
  }

  remove() {
    this.map.removeObject(this.marker);
  }
}