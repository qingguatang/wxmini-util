/**
 * 格式化参考
 * http://momentjs.com/docs/#/displaying/format/
 * @param {String|Number|Date} dt
 * @param {String} pattern
 * @return {String}
 */
export function formatTime(dt, pattern) {
  dt = parseDate(dt);
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  const hour = dt.getHours();
  const minute = dt.getMinutes();
  const sec = dt.getSeconds();

  const h = v => (v < 10 ? '0' + v : v);
  const map = {
    YYYY: year,
    MM: h(month),
    M: month,
    DD: h(day),
    D: day,
    HH: h(hour),
    H: hour,
    hh: h(hour),
    h: hour,
    m: minute,
    mm: h(minute),
    s: sec,
    ss: h(sec)
  };

  pattern = pattern || 'YYYY-MM-DD';
  return pattern.replace(/[a-zA-Z]+/g, name => {
    const ret = map[name];
    return ret === undefined ? name : ret;
  });
}

/**
 * 将字符串或数字转换成Date对象
 * @param {String|Number} dt
 * @return {Date}
 */
export function parseDate(dt) {
  if (typeof dt === 'string') {
    return parseFromString(dt);
  }
  if (typeof dt === 'number') {
    return parseFromNumber(dt);
  }
  if (typeof dt === 'object' && typeof dt.getTime === 'function') {
    return dt;
  }
  throw new Error('invalid date');
}

export function parseISOStr(str) {
  var arr = str.split(/[-+ :T]/);
  var date = new Date();
  date.setUTCFullYear(arr[0]);
  date.setUTCMonth(arr[1] - 1);
  date.setUTCDate(arr[2]);
  date.setUTCHours(arr[3]);
  date.setUTCMinutes(arr[4]);
  date.setUTCSeconds(arr[5]);
  return date;
}

export function emptyDay(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

export function compareDateIgnoreDay(prev, next) {
  return compareDate(emptyDay(prev), emptyDay(next));
}

export function compareDate(prev, next) {
  let prevTime = prev.getTime();
  let nextTime = next.getTime();
  if (prevTime < nextTime) {
    return -1;
  } else if (prevTime === nextTime) {
    return 0;
  } else {
    return 1;
  }
}

function parseFromNumber(time) {
  const dt = new Date();
  dt.setTime(time);
  return dt;
}

const rDateTime = /((\d{4})-(\d{1,2})-(\d{1,2}))([^\d]+?(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/;

function parseFromString(str) {
  const m = rDateTime.exec(str);
  if (!m) {
    return new Date('invalid date');
  }
  const dt = new Date();
  if (m[1]) {
    dt.setFullYear(m[2]);
    dt.setMonth(m[3] - 1);
    dt.setDate(m[4]);
  }
  if (m[5]) {
    dt.setHours(m[6]);
    dt.setMinutes(m[7]);
    dt.setSeconds(m[8] || 0);
  }
  return dt;
}
