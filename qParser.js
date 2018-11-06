import { parse } from './queryString.js';

/**
 * 用于从 `q` 参数中快速得到原来的参数
 * @see https://mp.weixin.qq.com/debug/wxadoc/introduction/qrcode.html
 */
export default function parseQ(q) {
  if (!q) {
    return {};
  }
  try {
    const url = decodeURIComponent(q);
    const mtc = url.match(/\?.+$/);
    return parse(mtc[0]);
  } catch (e) {
    return {};
  }
}
