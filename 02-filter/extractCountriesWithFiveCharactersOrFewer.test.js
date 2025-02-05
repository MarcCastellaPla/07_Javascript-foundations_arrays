import {
  describe,
  it,
  expect
} from 'vitest';
import {
  extractCountriesWithFiveCharactersOrFewer
} from './extractCountriesWithFiveCharactersOrFewer.js';

describe('Given extractCountriesWithFiveCharactersOrFewer', () => {
  it('When the list contains countries with names having mixed lengths, Then it should return only countries with names having five characters or fewer', () => {
    // Arrange
    const COUNTRIES_WITH_MIXED_LENGTH = [
      'United Kingdom',
      'Italy',
      'France',
      'Portugal',
      'Greece',
    ];

    const expectedResult = ['Italy'];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_MIXED_LENGTH);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list is empty, Then it should return an empty array', () => {
    // Arrange
    const EMPTY_COUNTRIES_ARRAY = [];
    const expectedResult = [];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(EMPTY_COUNTRIES_ARRAY);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains countries with names having more than five characters, Then it should return an empty array', () => {
    // Arrange
    const COUNTRIES_WITH_NO_SHORT_NAMES = [
      'United Kingdom',
      'Portugal',
      'Greece',
    ];

    const expectedResult = [];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_NO_SHORT_NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only countries with names having five characters or fewer, Then it should return the same array', () => {
    // Arrange
    const COUNTRIES_WITH_ALL_SHORT_NAMES = ['Italy', 'Spain', 'Japan'];
    const expectedResult = ['Italy', 'Spain', 'Japan'];

    // Act
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_ALL_SHORT_NAMES);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
