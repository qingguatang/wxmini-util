export default function(fn, opts) {
  if (typeof fn !== 'function') {
    throw new Error('arguments error: promisify(function, [options])');
  }

  opts = opts || {};
  const successField = opts.successField || 'success';
  const failField = opts.failField || 'fail';

  return function(params) {
    return new Promise((resolve, reject) => {
      params = params || {};
      params[successField] = function() {
        resolve.apply(null, arguments);
      };
      params[failField] = function(res) {
        console.error('fail', res); // eslint-disable-line
        reject.apply(null, arguments);
      };
      fn(params);
    });
  };
}
