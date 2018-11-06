export default function(name, key) {
  let items = name.split(key);
  return {
    prev: items[0],
    key,
    next: items[1]
  };
}
