
function buildScript(src, onLoad) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = onLoad;
  document.head.appendChild(script);
}

export default async (NativeMapClass, mapKey) => {
  const scripts = NativeMapClass.buildScriptTag(mapKey);
  for (const script of scripts) {
    await new Promise(resolve => buildScript(script, resolve));
  }
}