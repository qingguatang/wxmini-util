function htmlToNodes(html) {
  html = html
    .replace(/<img/g, '<img class="class_img"')
    .replace(/<p>/g, '<p class="class_p">')
    .replace(/<pre>/g, '<div class="class_pre">')
    .replace(/<\/pre>/g, '</div>')
    .replace(/(<code\s+class=")/g, '$1hljs ')
    .replace(/<code>/g, '<code class="hljs class_code">')
    .replace(/<h2/g, '<h2 class="class_h2"')
    .replace(/<h3/g, '<h3 class="class_h3"')
    .replace(/<h4/g, '<h4 class="class_h4"')
    .replace(/<ul/g, '<ul class="class_ul"')
    .replace(/<li/g, '<li class="class_li"')
    .replace(/<table/g, '<table class="class_table"')
    .replace(/<tbody/g, '<tbody class="class_tbody"')
    .replace(/<thead/g, '<thead class="class_thead"')
    .replace(/<tr/g, '<tr class="class_tr"')
    .replace(/<td/g, '<td class="class_td"')
    .replace(/<th>/g, '<th class="class_th">');
  return html;
}

function htmlDecode(html) {
  var s = '';
  if (html.length === 0) {
    return '';
  }
  s = html.replace(/&amp;/g, '&');
  // s = s.replace(/&lt;/g, '<');
  // s = s.replace(/&gt;/g, '>');
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/&#39;/g, "'");
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/<br\/>/g, '\n');
  return s;
}

module.exports = {
  htmlToNodes: htmlToNodes,
  htmlDecode: htmlDecode
};
