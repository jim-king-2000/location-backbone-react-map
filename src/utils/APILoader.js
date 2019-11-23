
function buildScript(src, onLoad) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = onLoad;
  document.head.append(script);
}

export default async (NativeMapClass, mapKey) => {
  if (!NativeMapClass.buildScriptTag) return;
  const scripts = NativeMapClass.buildScriptTag(mapKey);
  for (const script of scripts) {
    await new Promise(resolve => buildScript(script, resolve));
  }
}