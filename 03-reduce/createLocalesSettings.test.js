import { describe, it, expect } from 'vitest';
import { createLocalesSettings } from './createLocalesSettings.js';

describe('Given createLocalesSettings', () => {
  it('When the list contains multiple locales, Then it should return an object with the first locale enabled and the rest disabled', () => {
    // Arrange
    const LOCALES = ['EN', 'GR', 'FR', 'IT', 'PT'];
    const expectedResult = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    // Act
    const result = createLocalesSettings(LOCALES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list is empty, Then it should return an empty object', () => {
    // Arrange
    const EMPTY_LOCALES = [];
    const expectedResult = {};
    // Act
    const result = createLocalesSettings(EMPTY_LOCALES);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should handle an array with one locale', () => {
    // Arrange
    const SINGLE_LOCALE = ['EN'];
    const expectedResult = { EN: { id: 0, enabled: true } };

    // Act
    const result = createLocalesSettings(SINGLE_LOCALE);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
