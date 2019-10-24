import { Marker } from './marker';
import { Polyline } from './polyline';
import { MapView } from './mapView';
import { InfoWindow } from './infoWindow';
import { PositionToLngLat } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', Marker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export class RAMap {
  #map;
  #mapView;
  
  constructor(dom, options) {
    this.#map = new AMap.Map(dom, {
      zoom: options.zoom,
      center: PositionToLngLat(options.center),
    });
    this.#mapView = new MapView(this.#map);
  }

  static async loadMap(dom, options) {
    return new RAMap(dom, options);
  }

  static buildScriptTag(mapKey) {
    return [
      `//webapi.amap.com/maps?v=1.4.15&key=${mapKey}`,
      '//webapi.amap.com/ui/1.0/main.js?v=1.0.11'
    ];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.#map, options);
  }

  get MapView() {
    return this.#mapView;
  }
}