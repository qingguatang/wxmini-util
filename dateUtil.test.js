import { formatTime } from './dateUtil';


test('formatTime', () => {
  expect(formatTime('2018-1-1', 'YYYY-MM-DD')).toBe('2018-01-01');
  expect(formatTime('2018-1-11 12:1:23', 'YYYY-MM-DD hh:mm:ss')).toBe('2018-01-11 12:01:23');
  expect(formatTime('2018-8-23 23:7', 'YYYY-M-DD hh:mm:ss')).toBe('2018-8-23 23:07:00');

  expect(formatTime('2018-06-26T12:17:46.000+0000', 'YYYY-MM-DD hh:mm:ss')).toBe('2018-06-26 12:17:46');

  expect(formatTime('1990-1-1')).toBe('1990-01-01');
  expect(formatTime('2019-6-29', 'YYYY年M月29日')).toBe('2019年6月29日');

  expect(formatTime('2019-6-29', 'YYYY年M月29日')).toBe('2019年6月29日');

  const date = new Date('2019-12-12');
  expect(formatTime(date.getTime(), 'YYYY-MM-DD')).toBe('2019-12-12');
});
