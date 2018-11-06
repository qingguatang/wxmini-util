export default function(selector) {
  const query = wx.createSelectorQuery();
  query.select(selector).boundingClientRect();
  query.selectViewport().scrollOffset();
  query.exec(res => {
    if (res[0] && res[1]) {
      const scrollTop = res[0].top + res[1].scrollTop - 10;
      wx.pageScrollTo({ scrollTop, duration: 300 });
    }
  });
};
