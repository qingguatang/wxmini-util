export function stringify(query) {
  const list = [];
  for (const k in query) {
    // 不能encodeURIComponent，onLoad中会解析错误
    list.push(`${k}=${query[k]}`);
  }
  return list.join('&');
}

export function parse(str) {
  str = (str || '').replace(/^\?/, '');
  return str
    .split('&')
    .map(part => part.split('='))
    .reduce((acc, p) => {
      const [k, v] = p;
      return { ...acc, [k]: decodeURIComponent(v) };
    }, {});
}
