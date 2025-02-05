import { describe, it, expect } from 'vitest';
import { getEvensOnly } from './getEvensOnly.js';

describe('getEvensOnly', () => {
  it(' When the list contains numbers, Then it should return only even numbers', () => {
    // Arrange
    const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
    const expectedResult = [2, 12, 42, 28];

    // Act
    const result = getEvensOnly(NUMBERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list is empty, Then it should return an empty array', () => {
    // Arrange
    const EMPTY_NUMBERS_LIST = [];
    const expectedResult = [];

    // Act
    const result = getEvensOnly(EMPTY_NUMBERS_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it("When the list doesn't contain even numbers, Then it should return an empty array", () => {
    // Arrange
    const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
    const expectedResult = [];
    // Act
    const result = getEvensOnly(NUMBERS_LIST_WITHOUT_EVEN_VALUES);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only even numbers, Then it should return the same array', () => {
    // Arrange
    const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
    const expectedResult = [2, 4, 6, 8, 10];

    // Act
    const result = getEvensOnly(NUMBERS_LIST_WITH_ALL_EVEN_VALUES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only negative even numbers, Then it should return the same array', () => {
    // Arrange
    const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
    const expectedResult = [-2, -4, -6, -8, -10];

    // Act
    const result = getEvensOnly(NUMBERS_LIST_WITH_NEGATIVE_VALUES);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains both positive and negative even numbers, Then it should return both positive and negative even numbers', () => {
    // Arrange
    const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];
    const expectedResult = [4, -6, 8, -10];

    // Act
    const result = getEvensOnly(NUMBERS_LIST_WITH_MIXED_VALUES);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
