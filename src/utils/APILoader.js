
function buildScript(tag, onLoad) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = tag;
  script.onload = onLoad;
  return script;
}

export default (tag) => {
  const p = new Promise(resolve => {
    const script = buildScript(tag, resolve);
    document.head.appendChild(script);
  });

  return p;
}