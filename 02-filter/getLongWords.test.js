import { describe, it, expect } from 'vitest';
import { getLongWords } from './getLongWords.js';

describe('getLongWords', () => {
  it('Given an array of LANGUAGES, When getLongWords is called, Then it should return words longer than 5 characters', () => {
    // Arrange
    const LANGUAGES = ['Java', 'C++', 'JavaScript', 'C#', 'TypeScript'];
    const expectedResult = ['JavaScript', 'TypeScript'];

    // Act
    const result = getLongWords(LANGUAGES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('Given an array of BEATLES, When getLongWords is called, Then it should return words longer than 5 characters', () => {
    // Arrange
    const BEATLES = ['John', 'George', 'Paul', 'Ringo'];
    const expectedResult = ['George', 'Ringo'];

    // Act
    const result = getLongWords(BEATLES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('Given an array of SHORT_WORDS, When getLongWords is called, Then it should return an empty array if no words are long enough', () => {
    // Arrange
    const SHORT_WORDS = ['a', 'bb', 'ccc', 'dddd'];
    const expectedResult = [];

    // Act
    const result = getLongWords(SHORT_WORDS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('Given an array of ALL_LONG_WORDS, When getLongWords is called, Then it should return the same array if all words are long enough', () => {
    // Arrange
    const ALL_LONG_WORDS = ['JavaScript', 'TypeScript', 'Python'];
    const expectedResult = ['JavaScript', 'TypeScript', 'Python'];

    // Act
    const result = getLongWords(ALL_LONG_WORDS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('Given an EMPTY_ARRAY, When getLongWords is called, Then it should handle an empty input array and return an empty array', () => {
    // Arrange
    const EMPTY_ARRAY = [];
    const expectedResult = [];

    // Act
    const result = getLongWords(EMPTY_ARRAY);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('Given an array of MIXED_LENGTH_WORDS, When getLongWords is called, Then it should return only the long words from the array', () => {
    // Arrange
    const MIXED_LENGTH_WORDS = ['short', 'tiny', 'adequate', 'sufficient'];
    const expectedResult = ['short', 'adequate', 'sufficient'];

    // Act
    const result = getLongWords(MIXED_LENGTH_WORDS);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
