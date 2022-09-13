const reverseString = require('./reversestring');

test('A função reverseString existe', () => {
  expect(reverseString).toBeDefined();
});

test('O string está revertendo corretamente', () => {
  expect(reverseString('hello')).toEqual('olleh');
});