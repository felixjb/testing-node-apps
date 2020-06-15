import { isPasswordAllowed } from '../auth'

describe('isPasswordAllowed only allows some passwords', () => {
  const allowedPassword = ['!aBc123'];
  const disalowedPasswords = [
    'a2c!',
    '123456!',
    'ABCdef!',
    'abc123!',
    'ABC123!',
    'ABCdef123',
  ];

  allowedPassword.forEach((password) => {
    test(`allows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(true);
    });
  });

  disalowedPasswords.forEach((password) => {
    test(`disallows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(false);
    });
  });
});