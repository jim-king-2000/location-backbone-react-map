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

export default class RBingMap {
  #map;
  #mapView;
  #mapFeature;

  constructor(dom, options) {
    const { center, enableHighDpi = true, enableCORS = true, maxZoom = 18,
      allowHidingLabelsOfRoad = true, showDashboard = false, children,
      ...others } = options;
    this.#map = new Microsoft.Maps.Map(dom, {
      center: PositionToLocation(center),
      enableHighDpi,
      enableCORS,
      allowHidingLabelsOfRoad,
      showDashboard,
      maxZoom,
      ...others,
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
    return [`https://www.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=${buildCallbackName(this.name)}&mkt=zh-cn&setlang=zh-cn`];
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
