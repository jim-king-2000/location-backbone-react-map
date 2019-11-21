import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends Microsoft.Maps.CustomOverlay {
  #domMarkerOverlay;
  #viewChangeEventHandler;
  #mapResizeEventHandler

  constructor(position, options) {
    super({ beneathLabels: false });
    const DomOverlay = buildDomOverlay(
      position => this.getMap().tryLocationToPixel(
        position, Microsoft.Maps.PixelReference.control)
    );
    this.#domMarkerOverlay = new DomOverlay(position, options);
  }

  onAdd() {
    const div = this.#domMarkerOverlay.onAdd();
    this.setHtmlElement(div);
  }

  onLoad() {
    this.#viewChangeEventHandler = Microsoft.Maps.Events.addHandler(
      this.getMap(),
      'viewchange',
      () => this.#domMarkerOverlay.draw()
    );
    this.#mapResizeEventHandler = Microsoft.Maps.Events.addHandler(
      this.getMap(),
      'mapresize',
      () => this.#domMarkerOverlay.draw()
    );

    // Invoking this.#domMarkerOverlay.draw() directly will lead to bugs since
    // both div.offsetWidth and div.offsetHeight are 0 then. Invoking it in
    // setTimeout() resolve the problem. If this.#domMarkerOverlay.draw() did
    // not depends on div.offsetWidth or div.offsetHeight, it would be OK to
    // invoke it directly.
    setTimeout(() => this.#domMarkerOverlay.draw());
  }

  onRemove() {
    Microsoft.Maps.Events.removeHandler(this.#mapResizeEventHandler);
    Microsoft.Maps.Events.removeHandler(this.#viewChangeEventHandler);
  }
}
