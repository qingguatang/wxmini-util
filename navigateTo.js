/* getCurrentPages() */

export default function(url, back) {
  const pages = getCurrentPages();
  const path = url.split('?')[0];
  const index = pages.findIndex(page => trimSlash(page.route) === trimSlash(path));
  if (index === -1) {
    // 传递了back参数，则退回指定页数
    // 然后再redirect到目标页
    const goto = () => wx.redirectTo({ url });
    if (back) {
      const page = pages[pages.length - back - 1];
      if (!page) {
        goto();
        return;
      }

      const origin = page.onShow;
      page.onShow = function() {
        page.onShow = origin;
        goto();
      };
      wx.navigateBack({ delta: back });
    } else {
      goto();
    }
  } else {
    // 栈中已有相应页面，就退到那个页面
    // 退回的那个页面需要在onShow中重新加载数据
    const delta = pages.length - index - 1;
    wx.navigateBack({ delta });
  }
}


function trimSlash(str) {
  return str.replace(/^\//, '');
}
