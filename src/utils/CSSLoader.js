
export default NativeMapClass => {
  if (!NativeMapClass.buildCssTag) return;
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = NativeMapClass.buildCssTag();
  document.head.appendChild(cssLink);
}