import { PositionToLocation } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    const htmlContent = renderToStaticMarkup(
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          padding: '9px',
          position: 'relative',
        }}
      >
        <button
          onClick={events.close}
          style={{
            top: 0,
            right: 0,
            border: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '20px',
            height: '20px',
            padding: 0,
            margin: 0,
            position: 'absolute',
          }}
        >
          &#10006;
        </button>
        {children}
      </div>
    );
    this.infoWindow = new Microsoft.Maps.Infobox(PositionToLocation(position), {
      ...others,
      htmlContent,
    });
    this.infoWindow.setMap(map);
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