import { renderToDiv } from '../../../utils/Render';

export default class HtmlPushpin extends Microsoft.Maps.CustomOverlay {
  constructor(position, options) {
    super();
    this._position = position;
    this.options = options;
  }

  onAdd() {
    const div = renderToDiv(this.options.children);
    div.style.position = 'absolute';
    div.style.transform = `rotate(${this.options.angle}deg)`;
    this.setHtmlElement(div);
    this._div = div;
    return div;
  }

  onLoad() {
    const position = this.getMap().tryLocationToPixel(
      this._position, Microsoft.Maps.PixelReference.control);
    this._div.style.left = position.x - this._div.offsetWidth / 2 + 'px';
    this._div.style.top = position.y - this._div.offsetHeight / 2 + 'px';
  }

  onRemove() {
  }
}
