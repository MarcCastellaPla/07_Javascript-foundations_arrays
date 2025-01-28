import { describe, it, expect } from 'vitest';
import feedMonkeys from './feedMonkeys.js';
const MONKEYS_LIST = ['🐒', '🦍', '🦧'];

describe('Given feedMonkeys', () => {
  it('When the monkeys are fed with bananas, then all three monkeys should have a banana', () => {
    // Arrange
    const banana = '🍌';
    const expectedResult = ['🍌🐒', '🍌🦍', '🍌🦧'];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, banana);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the monkeys are fed with apples, then all three monkeys should have an apple', () => {
    // Arrange
    const apple = '🍎';
    const expectedResult = ['🍎🐒', '🍎🦍', '🍎🦧'];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, apple);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the monkeys are fed with grapes, then all three monkeys should have a grape', () => {
    // Arrange
    const grape = '🍇';
    const expectedResult = ['🍇🐒', '🍇🦍', '🍇🦧'];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, grape);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When no fruit is provided to the monkeys, then the function should return an empty array', () => {
    // Act
    const result = feedMonkeys(MONKEYS_LIST);
    const expectedResult = [];

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the monkeys are fed with special characters as fruit, then the function should handle it without errors', () => {
    // Arrange
    const specialCharacters = '🍉🍇';
    const expectedResult = ['🍉🍇🐒', '🍉🍇🦍', '🍉🍇🦧'];

    // Act
    const result = feedMonkeys(MONKEYS_LIST, specialCharacters);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
