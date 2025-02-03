import { describe, it, expect } from 'vitest';
import { createLocalesSettings } from './createLocalesSettings.js';

const LOCALES = ['EN', 'GR', 'FR', 'IT', 'PT'];
const EMPTY_LOCALES = [];
const SINGLE_LOCALE = ['EN'];
const DUPLICATE_LOCALES = ['EN', 'EN', 'FR', 'FR'];

describe('createLocalesSettings', () => {
  it.todo(
    'should create locales settings with the first locale enabled and the rest disabled',
    () => {
      // Arrange
      // Act
      // Assert
      expect(result).toEqual(expectedResult);
    },
  );

  it.todo('should handle an empty array', () => {
    // Arrange
    // Act
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it.todo('should handle an array with one locale', () => {
    // Arrange
    // Act
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it.todo('should handle an array with duplicate locales', () => {
    // Arrange
    // Act
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
