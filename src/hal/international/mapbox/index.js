import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export class MapBox {
  constructor(dom) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamltLWtpbmctMjAwMCIsImEiOiJjazFqaG41azcyMHczM2NwNnZlcWhtcG54In0.VJFYenX5OVz3R-z_JjB16w';
    this.map = new mapboxgl.Map({
      container: dom,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [];
  }
}