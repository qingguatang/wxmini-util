export default function debounce(fn, timeout) {
  if (typeof fn !== 'function') {
    throw new Error('invalid debounce function');
  }

  let last = null;
  return function() {
    if (last) {
      return last.result;
    }

    setTimeout(() => { last = null; }, timeout || 2000);   // eslint-disable-line
    const result = fn.apply(this, arguments);
    last = { result };
    return result;
  };
}


export function debounceMethod(obj, method, timeout) {
  const name = '__debounce_' + method;
  // guard
  if (obj[name]) {
    return;
  }
  obj[name] = true;
  obj.methods[method] = debounce(obj.methods[method], timeout);
}

