export default function(n) {
  let start = 0;
  let count = n;
  if (Array.isArray(n)) {
    start = n[0];
    count = n[1] + 1;
  }
  const list = [];
  for (let i = start; i < count; i++) {
    list.push(i);
  }
  return list;
}
