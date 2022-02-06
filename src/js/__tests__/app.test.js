import hero from '../app';

test('getting information about the characters health', () => {
  const input = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = hero(input);
  expect(received).toEqual(expected);
});

test('getting information about the characters health', () => {
  const input = { name: 'Маг', health: 32 };
  const expected = 'wounded';
  const received = hero(input);
  expect(received).toEqual(expected);
});

test('getting information about the characters health', () => {
  const input = { name: 'Маг', health: 70 };
  const expected = 'healthy';
  const received = hero(input);
  expect(received).toEqual(expected);
});