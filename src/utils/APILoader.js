const cache = new Set();

function buildScript(src, onLoad) {
  if (cache.has(src)) return;
  console.log(src)
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = onLoad;
  document.head.appendChild(script);
  cache.add(src);
}

export default async (NativeMapClass, mapKey) => {
  if (!NativeMapClass.buildScriptTag) return;
  const scripts = NativeMapClass.buildScriptTag(mapKey);
  for (const script of scripts) {
    await new Promise(resolve => buildScript(script, resolve));
  }
}