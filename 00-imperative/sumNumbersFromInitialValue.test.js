import {
  describe,
  it,
  expect
} from 'vitest';
import {
  sumNumbersFromInitialValue
} from './sumNumbersFromInitialValue.js';

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe('Given sumNumbersFromInitialValue', () => {
  it('When the initial value is 0, Then it should return the correct sum', () => {
    // Arrange
    const expectedResult = 0;

    // Act
    const result = sumNumbersFromInitialValue(
      EMPTY_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the initial value is 10, Then it should return the correct sum', () => {
    // Arrange
    const expectedResult = 10;

    // Act
    const result = sumNumbersFromInitialValue(
      EMPTY_NUMBERS_LIST,
      initialAccumulatedValueAsTen,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list is empty, Then it should return the initial value', () => {
    // Arrange
    const expectedResult = 0;

    // Act
    const result = sumNumbersFromInitialValue(
      EMPTY_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains negative numbers, Then it should return the correct sum', () => {
    // Arrange
    const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
    const expectedResult = -15;

    // Act
    const result = sumNumbersFromInitialValue(
      NEGATIVE_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains a mix of positive and negative numbers, Then it should return the correct sum', () => {
    // Arrange
    const expectedResult = 3;

    // Act
    const result = sumNumbersFromInitialValue(
      MIXED_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the initial value is 0, Then it should return the correct sum', () => {
    // Arrange
    const expectedResult = 15;

    // Act
    const result = sumNumbersFromInitialValue(
      POSITIVE_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the initial value is 100, Then it should return the correct sum', () => {
    // Arrange
    const expectedResult = 115;

    // Act
    const result = sumNumbersFromInitialValue(
      POSITIVE_NUMBERS_LIST,
      initialAccumulatedValueAsOneHundred,
    );

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
