import { removeStartingAndEndingDoubleQuotes } from './string-utils';

describe('string-utils', () => {
  describe('removeStartingAndEndingDoubleQuotes()', () => {
    it('should remove starting and ending double quotes from string', () => {
      const testString = `"This is a test string"`;
      const expectedString = `This is a test string`;

      expect(removeStartingAndEndingDoubleQuotes(testString)).toEqual(expectedString);
    });

    it('should not remove double quotes inside string when there are starting and ending double quotes', () => {
      const testString = `"This is a "test" string"`;
      const expectedString = `This is a "test" string`;

      expect(removeStartingAndEndingDoubleQuotes(testString)).toEqual(expectedString);
    });

    it('should not alter string if there are not starting and ending double quotes', () => {
      const testString = `This is a test string`;
      const expectedString = testString;

      expect(removeStartingAndEndingDoubleQuotes(testString)).toEqual(expectedString);
    });

    it('should not alter string if there is starting but not ending double quotes', () => {
      const testString = `"This is a test string`;
      const expectedString = testString;

      expect(removeStartingAndEndingDoubleQuotes(testString)).toEqual(expectedString);
    });

    it('should not alter string if there is no starting but there is ending double quotes', () => {
      const testString = `This is a test string"`;
      const expectedString = testString;

      expect(removeStartingAndEndingDoubleQuotes(testString)).toEqual(expectedString);
    });

    it('should not alter string if there are starting and ending single quotes', () => {
      const testString = `'This is a test string'`;
      const expectedString = testString;

      expect(removeStartingAndEndingDoubleQuotes(testString)).toEqual(expectedString);
    });
  })
});
