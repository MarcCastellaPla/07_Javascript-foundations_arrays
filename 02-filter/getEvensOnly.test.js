import { describe, it, expect } from 'vitest';
import { getEvensOnly } from './getEvensOnly.js';

const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
const EMPTY_NUMBERS_LIST = [];
const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];

describe('getEvensOnly', () => {
  it.todo(
    ' When the list contains numbers, Then it should return only even numbers',
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );

  it.todo(
    'When the list is empty, Then it should return an empty array',
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );

  it.todo(
    "When the list doesn't contain even numbers, Then it should return an empty array",
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );

  it.todo(
    'When the list contains only even numbers, Then it should return the same array',
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );

  it.todo(
    'When the list contains only negative even numbers, Then it should return the same array',
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );

  it.todo(
    'When the list contains both positive and negative even numbers, Then it should return both positive and negative even numbers',
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );
});
