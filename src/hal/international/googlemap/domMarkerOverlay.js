import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends google.maps.OverlayView {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      div => this.getPanes().overlayLayer.appendChild(div),
      position => this.getProjection().fromLatLngToDivPixel(position)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
    if (options.map) this.setMap(options.map);
  }

  onAdd() {
    return this.DomMarkerOverlay_.onAdd();
  }

  draw() {
    return this.DomMarkerOverlay_.draw();
  }

  onRemove() {
    return this.DomMarkerOverlay_.onRemove();
  }
}
