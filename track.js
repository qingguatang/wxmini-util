import wepy from 'wepy';
import assert from 'assert';

const systemInfo = wx.getSystemInfoSync();

async function trackLearning({ type, id, data }) {
  assert(type && id && data, '`type`, `id`, `data` required');
  const userInfo = wx.getStorageSync('userInfo') || {};
  const config = wepy.$appConfig;
  const env = (config.debug || {}).hostEnv || config.env;
  if (env === 'development') {
    type = 'test_' + type;
  }

  const pages = getCurrentPages();
  const url = pages[pages.length - 1].route;

  wepy.request({
    url: 'https://london.unreach.io/track/learninqgt/document',
    data: {
      url,
      __topic__: userInfo.id || '',
      __userAgent__: JSON.stringify(systemInfo),
      type,
      id,
      data: JSON.stringify(data)
    }
  });
}

export { trackLearning };
