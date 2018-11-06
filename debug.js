const filter = wx.getStorageSync('DEBUG');
const re = filter ? new RegExp(filter) : null;
const noop = v => v;

const Colors = [
  '#f2711c',
  '#fbbd08',
  '#b5cc18',
  '#21ba45',
  '#00b5ad',
  '#2185d0',
  '#6435c9',
  '#a333c8',
  '#e03997',
  '#a5673f'
];

let index = 0;
const cache = {};

export default function(name) {
  if (!re || !re.test(name)) {
    return noop;
  }
  const color = cache[name] || (cache[name] = Colors[(index++ % Colors.length)]);
  return (msg, ...args) => {
    if (typeof msg !== 'string') {
      args.unshift(msg);
      msg = '';
    }
    msg = `%c [${name}] ${msg}`;
    args.unshift(`color:${color}`);
    console.log(msg, ...args);  // eslint-disable-line
  };
}
