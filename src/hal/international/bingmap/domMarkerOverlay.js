import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends Microsoft.Maps.CustomOverlay {
  constructor(position, options) {
    super({ beneathLabels: false });
    const DomOverlay = buildDomOverlay(
      position => this.getMap().tryLocationToPixel(
        position, Microsoft.Maps.PixelReference.control)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
  }

  onAdd() {
    const div = this.DomMarkerOverlay_.onAdd();
    this.setHtmlElement(div);
  }

  onLoad() {
    this.viewChangeEventHandler = Microsoft.Maps.Events.addHandler(
      this.getMap(),
      'viewchange',
      () => this.DomMarkerOverlay_.draw()
    );
    this.mapresizeEventHandler = Microsoft.Maps.Events.addHandler(
      this.getMap(),
      'mapresize',
      () => this.DomMarkerOverlay_.draw()
    );

    // Invoking this.DomMarkerOverlay_.draw() directly will lead to bugs since
    // both div.offsetWidth and div.offsetHeight are 0 then. Invoking it in
    // setTimeout() resolve the problem. If this.DomMarkerOverlay_.draw() did
    // not depends on div.offsetWidth or div.offsetHeight, it would be OK to
    // invoke it directly.
    setTimeout(
      () => this.DomMarkerOverlay_.draw(),
      0
    );
  }

  onRemove() {
    Microsoft.Maps.Events.removeHandler(this.mapresizeEventHandler);
    Microsoft.Maps.Events.removeHandler(this.viewChangeEventHandler);
  }
}
