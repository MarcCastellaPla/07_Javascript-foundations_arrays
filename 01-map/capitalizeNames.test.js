import { describe, it, expect } from 'vitest';
import { capitalizeNames } from './capitalizeNames.js';
const NAMES = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
const EMPTY_NAMES_LIST = [];
const CAPITALIZED_NAMES = ['John', 'Jacob', 'Jingleheimer', 'Schmidt'];
const UPPERCASED_NAMES = ['JOHN', 'JACOB', 'JINGLEHEIMER', 'SCHMIDT'];
const LOWERCASED_NAMES = ['john', 'jacob', 'jingleheimer', 'schmidt'];
const MIXED_CAPITALIZED_NAMES = ['jOhN', 'JaCoB', 'jInGlEhEiMeR', 'sChMiDt'];

describe('Given capitalizeMates', () => {
  it('When an array is given, Then it should return an array with all names capitalized', () => {
    // Arrange
    const expectedResult = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeNames(NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When namesList is empty, Then it should return an empty array', () => {
    // Arrange
    const expectedResult = [];

    // Act
    const result = capitalizeNames(EMPTY_NAMES_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When names are already capitalized correctly, Then it should return the same array', () => {
    // Arrange
    const expectedResult = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeNames(CAPITALIZED_NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When names are all uppercase, Then it should return the names correctly capitalized', () => {
    // Arrange
    const expectedResult = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeNames(UPPERCASED_NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When names are all lowercase, Then it should return the names correctly capitalized', () => {
    // Arrange
    const expectedResult = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeNames(LOWERCASED_NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When names have mixed casing, Then it should return the names correctly capitalized', () => {
    // Arrange
    const expectedResult = CAPITALIZED_NAMES;

    // Act
    const result = capitalizeNames(MIXED_CAPITALIZED_NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
