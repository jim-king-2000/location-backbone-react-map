import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends BMap.Overlay {
  #DomMarkerOverlay;

  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      (position, map) => map.pointToOverlayPixel(position)
    );
    this.#DomMarkerOverlay = new DomOverlay(position, options);
  }

  initialize(map) {
    const div = this.#DomMarkerOverlay.onAdd(map);
    map.getPanes().markerPane.appendChild(div);
    return div;
  }

  draw() {
    return this.#DomMarkerOverlay.draw();
  }
}
