import {
  describe,
  it,
  expect
} from 'vitest';
import {
  customersWhoBelongToMembership
} from './customersWhoBelongToMembership.js';

describe('Given customersWhoBelongToMembership', () => {
  it('When the list contains customers who are members and customers who are not, Then it should return only customers who are members', () => {
    // Arrange
    const CUSTOMERS_LIST = [{
        name: 'Foo',
        isMember: true
      },
      {
        name: 'Bar',
        isMember: false
      },
      {
        name: 'Fizz',
        isMember: true
      },
      {
        name: 'Buzz',
        isMember: false
      },
      {
        name: 'FizzBuzz',
        isMember: true
      },
    ];

    const expectedResult = [{
        name: 'Foo',
        isMember: true
      },
      {
        name: 'Fizz',
        isMember: true
      },
      {
        name: 'FizzBuzz',
        isMember: true
      },
    ];

    // Act
    const result = customersWhoBelongToMembership(CUSTOMERS_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list is empty, Then it should return an empty array', () => {
    // Arrange
    const EMPTY_CUSTOMERS_LIST = [];
    const expectedResult = [];

    // Act
    const result = customersWhoBelongToMembership(EMPTY_CUSTOMERS_LIST);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains customers who are not members, Then it should return an empty array', () => {
    // Arrange
    const CUSTOMERS_LIST_WITH_NO_MEMBERS = [{
        name: 'Bar',
        isMember: false
      },
      {
        name: 'Buzz',
        isMember: false
      },
    ];

    const expectedResult = [];

    // Act
    const result = customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_NO_MEMBERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only customers who are members, Then it should return the same array', () => {
    // Arrange
    const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [{
        name: 'Foo',
        isMember: true
      },
      {
        name: 'Fizz',
        isMember: true
      },
      {
        name: 'FizzBuzz',
        isMember: true
      },
    ];

    const expectedResult = [{
        name: 'Foo',
        isMember: true
      },
      {
        name: 'Fizz',
        isMember: true
      },
      {
        name: 'FizzBuzz',
        isMember: true
      },
    ];

    // Act
    const result = customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_ALL_MEMBERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
