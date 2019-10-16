import ReactDOM from 'react-dom';

export function renderToDiv(element) {
  const content = document.createElement('div');
  ReactDOM.render(element, content);
  return content;
}