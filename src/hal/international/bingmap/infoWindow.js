import { PositionToLocation } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';

const closeButtonId = 'bingMapHTMLInfoBoxCloseButton';

function renderContent(children) {
  return renderToStaticMarkup(
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '9px',
        position: 'relative',
      }}
    >
      <button
        id={closeButtonId}
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
}

export class InfoWindow {
  #infoWindow;

  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.#infoWindow = new Microsoft.Maps.Infobox(
      PositionToLocation(position), {
        ...others,
        htmlContent: renderContent(children),
      }
    );
    this.#infoWindow.setMap(map);
    Microsoft.Maps.Events.addHandler(this.#infoWindow, 'click', e => {
      if (e.originalEvent.target.id === closeButtonId) {
        events.close(e);
      }
    });
  }

  setOptions(options) {
    const { position, children } = options;
    this.#infoWindow.setOptions({
      location: PositionToLocation(position),
      htmlContent: renderContent(children),
    });
  }

  remove() {
    this.#infoWindow && this.#infoWindow.setMap(null);
  }
}