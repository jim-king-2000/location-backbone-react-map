import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { MapView } from './mapView';
import { MapFeature } from './mapFeature';
import { PositionToLocation } from './utils';
import { buildCallbackName } from '../../../utils/CallbackName';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export class RBingMap {
  #map;
  #mapView;
  #mapFeature;

  constructor(dom, options) {
    this.#map = new Microsoft.Maps.Map(dom, {
      enableHighDpi: true,
      enableCORS: true,
      allowHidingLabelsOfRoad: true,
      zoom: options.zoom,
      center: PositionToLocation(options.center),
      maxZoom: 18,
    });
    this.#mapView = new MapView(this.#map);
    this.#mapFeature = new MapFeature(this.#map);
  }

  static async loadMap(dom, options) {
    return new RBingMap(dom, options);
  }

  static get AsyncLoad() {
    return true;
  }

  static buildScriptTag(mapKey) {
    return [`//cn.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=${buildCallbackName(this.name)}`];
  }

  destroy() {
    this.#map && this.#map.dispose();
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.#map, options);
  }

  get MapView() {
    return this.#mapView;
  }

  get MapFeature() {
    return this.#mapFeature;
  }
}

export default RBingMap;
