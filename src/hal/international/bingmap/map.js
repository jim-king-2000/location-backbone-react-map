import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { PositionToLocation } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
]);

export class RBingMap {
  constructor(dom, options) {
    this.map = new Microsoft.Maps.Map(dom, {
      enableHighDpi: true,
      zoom: options.zoom,
      center: PositionToLocation(options.center),
    });
  }

  static async loadMap(dom, options) {
    return new RBingMap(dom, options);
  }

  static get LoadType() {
    return {
      async: true,
      startup: 'initializeRBingMap'
    }
  }

  static buildScriptTag(mapKey) {
    return [`//cn.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=${this.LoadType.startup}`];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}