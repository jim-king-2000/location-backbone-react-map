import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends BMap.Overlay {
  #domMarkerOverlay;

  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      (position, map) => map.pointToOverlayPixel(position)
    );
    this.#domMarkerOverlay = new DomOverlay(position, options);
  }

  initialize(map) {
    const div = this.#domMarkerOverlay.onAdd(map);
    map.getPanes().markerPane.appendChild(div);
    return div;
  }

  draw() {
    return this.#domMarkerOverlay.draw();
  }
}
