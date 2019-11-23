import { renderToDiv } from './Render';

export default fromPositionToPixel => {
  return (
    class {
      #map;
      #div;
      #options;
      #position;

      constructor(position, options) {
        this.#position = position;
        this.#options = options;
      }
    
      onAdd(map) {
        const div = renderToDiv(this.#options.children);
        div.style.visibility = 'hidden';
        div.style.position = 'absolute';
        div.style.transform = `rotate(${this.#options.angle}deg)`;
        div.style.cursor = 'pointer';
        this.#div = div;
        this.#map = map;
        return div;
      }
    
      draw() {
        const position = fromPositionToPixel(this.#position, this.#map);
        this.#div.style.left = position.x - this.#div.offsetWidth / 2 + 'px';
        this.#div.style.top = position.y - this.#div.offsetHeight / 2 + 'px';
        this.#div.style.visibility = 'visible';
      }
    
      onRemove() {
        this.#div.remove();
        this.#div = null;
      }
    }
  );
}

