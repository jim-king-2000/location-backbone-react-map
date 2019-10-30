const cache = new Set();

export default NativeMapClass => {
  if (!NativeMapClass.buildCssTag) return;
  const cssFile = NativeMapClass.buildCssTag();
  if (cache.has(cssFile)) return;
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = cssFile;
  document.head.appendChild(cssLink);
  cache.add(cssFile);
}