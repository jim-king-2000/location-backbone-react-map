import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export class OLMap {
  constructor(dom) {
    this.map = new Map({
      target: dom,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([121, 31]),
        zoom: 11
      })
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [];
  }
}