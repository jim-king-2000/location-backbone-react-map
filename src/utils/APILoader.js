
function buildScript(src, onLoad) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = onLoad;
  document.head.appendChild(script);
}

export default (NativeMapClass, mapKey) => {
  const promises = NativeMapClass.buildScriptTag(mapKey).map(
    src => new Promise(resolve => buildScript(src, resolve)));

  return Promise.all(promises);
}