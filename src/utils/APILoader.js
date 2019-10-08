
function buildScript(mapKey, onLoad) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `//webapi.amap.com/maps?v=1.4.15&key=${mapKey}`;
  script.onload = onLoad;
  return script;
}

export default (mapKey) => {
  const p = new Promise(resolve => {
    const script = buildScript(mapKey, resolve);
    document.head.appendChild(script);
  });

  return p;
}