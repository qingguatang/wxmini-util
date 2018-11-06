exports.backOrRedirect = url => {
  const pages = getCurrentPages();
  const path = url.split('?')[0];
  const index = pages.findIndex(
    page => trimSlash(page.route) === trimSlash(path)
  );
  if (index === -1) {
    wx.redirectTo({ url });
  } else {
    const delta = pages.length - index - 1;
    wx.navigateBack({ delta });
  }
};

function trimSlash(str) {
  return str.replace(/^\//, '');
}
