import { sum } from '../src/foo';

test('basic', (): void => {
  expect(sum()).toBe(0);
});

test('basic again', (): void => {
  expect(sum(1, 2)).toBe(3);
});
