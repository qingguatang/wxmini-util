export default function compareVersion(v1, v2) {
  return convertToInt(v1) - convertToInt(v2);
}

function convertToInt(v) {
  let value = 0;
  let sections = v.split('.');
  for (let i = sections.length - 1; i >= 0; i--) {
    value += sections[i] * Math.pow(100, sections.length - 1 - i);
  }
  return value;
}
