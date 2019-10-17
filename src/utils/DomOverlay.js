import { renderToDiv } from './Render';

export default (appendChild, fromPositionToPixel) => {
  return (
    class {
      constructor(position, options) {
        this.position_ = position;
        this.options_ = options;
      }
    
      onAdd(map) {
        const div = renderToDiv(this.options_.children);
        div.style.position = 'absolute';
        div.style.transform = `rotate(${this.options_.angle}deg)`;
        appendChild(div, map);
        this.div_ = div;
        this.map_ = map;
        return div;
      }
    
      draw() {
        const position = fromPositionToPixel(this.position_, this.map_);
        this.div_.style.left = position.x - this.div_.offsetWidth / 2 + 'px';
        this.div_.style.top = position.y - this.div_.offsetHeight / 2 + 'px';
      }
    
      onRemove() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      }
    }
  );
}

