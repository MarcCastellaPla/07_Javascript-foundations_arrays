import { describe, it, expect } from 'vitest';
import { transformSecondsToWords } from './transformSecondsToWords.js';

describe('Given transformSecondsToWords', () => {
  it('When an array of seconds is provided, then the function should return an array of strings', () => {
    // Arrange
    const SECONDS = [2, 5, 100];
    const expectedResult = ['2', '5', '100'];
    // Act
    const result = transformSecondsToWords(SECONDS);

    // Asser
    expect(result).toEqual(expectedResult);
  });

  it('When an empty array is provided, then the function should return an empty array', () => {
    // Arrange
    const EMPTY_SECONDS_LIST = [];
    const expectedResult = [];

    // Act
    const result = transformSecondsToWords(EMPTY_SECONDS_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When there is only one element in the array Then the function should return an array with one string', () => {
    // Arrange
    const SINGLE_SECOND_LIST = [42];
    const expectedResult = ['42'];

    // Act
    const result = transformSecondsToWords(SINGLE_SECOND_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When there is only one element in the array and it is zero, then the function should return an array with one string', () => {
    // Arrange
    const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
    const expectedResult = ['0'];

    // Act
    const result = transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When there are negative numbers in the array, then the function should return an array of strings', () => {
    // Arrange
    const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];
    const expectedResult = ['-1', '-60', '-3600'];

    // Act
    const result = transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
