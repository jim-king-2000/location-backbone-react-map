import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends google.maps.OverlayView {
  #domMarkerOverlay;

  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      position => this.getProjection().fromLatLngToDivPixel(position)
    );
    this.#domMarkerOverlay = new DomOverlay(position, options);
    if (options.map) this.setMap(options.map);
  }

  onAdd() {
    const div = this.#domMarkerOverlay.onAdd();
    this.getPanes().overlayLayer.append(div);
  }

  draw() {
    return this.#domMarkerOverlay.draw();
  }

  onRemove() {
    return this.#domMarkerOverlay.onRemove();
  }
}
