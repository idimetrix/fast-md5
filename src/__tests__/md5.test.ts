import md5 from '../index';

test('md5', () => {
  expect(md5('Expo')).toBe('c29f23f279126757ba18ec74d0d27cfa');
  expect(md5('2020')).toBe('7b7a53e239400a13bd6be6c91c4f6c4e');
});
