
function buildScript(NativeMapClass, mapKey, onLoad) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onGo2mapApiLoad = window[NativeMapClass.callbackName()]; // for Sougou Map only
  script.src = NativeMapClass.buildScriptTag(mapKey);
  script.onload = onLoad;
  return script;
}

export default (NativeMapClass, mapKey) => {
  const p = new Promise(resolve => {
    const script = buildScript(NativeMapClass, mapKey, resolve);
    document.head.appendChild(script);
  });

  return p;
}