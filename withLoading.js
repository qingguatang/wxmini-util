/**
 * 包装一个返回Promise的函数，使其支持loading。
 * 做了下交互优化：
 * 1. 快的Promise，不出现loading
 */
export default function withLoading(fn, timeout = 250) {
  if (typeof fn === 'function') {
    return create(fn, timeout);
  }
  if (typeof fn.then === 'function') {
    create(() => fn, timeout)();
    return fn;
  }
  throw new Error('argument error');
}

function create(fn, timeout) {
  let timer = null;
  return function() {
    timer = setTimeout(() => {
      timer = null;
      wx.showLoading();
    }, timeout);

    const close = () => {
      timer ? clearTimeout(timer) : wx.hideLoading();
    };

    const defer = fn.apply(this, arguments);
    defer.then(close).catch(close);
    return defer;
  };
}

