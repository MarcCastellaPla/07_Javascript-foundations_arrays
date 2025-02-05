import {
  describe,
  it,
  expect
} from 'vitest';
import {
  extractVipsNames
} from './extractVipsNames.js';

describe('Given extractVipsNames', () => {
  it('When the VIPS array is provided, then the function should return an array of strings with the names of the VIPs', () => {
    // Arrange
    const VIPS = [{
        name: 'Foo',
        age: 80
      },
      {
        name: 'Bar',
        age: 2
      },
      {
        name: 'Fizz',
        age: 5
      },
      {
        name: 'Buzz',
        age: 16
      },
      {
        name: 'FizzBuzz',
        age: 100
      },
    ];

    const expectedResult = ['Foo', 'Bar', 'Fizz', 'Buzz', 'FizzBuzz'];

    // Act
    const result = extractVipsNames(VIPS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When an empty array is provided, then the function should return an empty array', () => {
    // Arrange
    const EMPTY_VIPS_LIST = [];
    const expectedResult = [];

    // Act
    const result = extractVipsNames(EMPTY_VIPS_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When there is only one element in the array, then the function should return an array with one string', () => {
    // Arrange
    const SINGLE_VIP_LIST = [{
      name: 'Foo',
      age: 80
    }];
    const expectedResult = ['Foo'];

    // Act
    const result = extractVipsNames(SINGLE_VIP_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When there are VIPs with different ages, then the function should return an array of strings with the names of the VIPs', () => {
    // Arrange
    const VIPS_WITH_DIFFERENT_AGES = [{
        name: 'Foo',
        age: 80
      },
      {
        name: 'Bar',
        age: 2
      },
      {
        name: 'Fizz',
        age: 5
      },
      {
        name: 'Buzz',
        age: 16
      },
      {
        name: 'FizzBuzz',
        age: 100
      },
    ];

    const expectedResult = ['Foo', 'Bar', 'Fizz', 'Buzz', 'FizzBuzz'];

    // Act
    const result = extractVipsNames(VIPS_WITH_DIFFERENT_AGES);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
