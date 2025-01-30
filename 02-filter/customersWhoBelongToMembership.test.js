import { describe, it, expect } from 'vitest';
import { customersWhoBelongToMembership } from './customersWhoBelongToMembership.js';

const EMPTY_CUSTOMERS_LIST = [];

const CUSTOMERS_LIST = [
  { name: 'Foo', isMember: true },
  { name: 'Bar', isMember: false },
  { name: 'Fizz', isMember: true },
  { name: 'Buzz', isMember: false },
  { name: 'FizzBuzz', isMember: true },
];

const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
  { name: 'Bar', isMember: false },
  { name: 'Buzz', isMember: false },
];

const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
  { name: 'Foo', isMember: true },
  { name: 'Fizz', isMember: true },
  { name: 'FizzBuzz', isMember: true },
];

describe('Given customersWhoBelongToMembership', () => {
  it.todo(
    'When the list contains customers who are members and customers who are not, Then it should return only customers who are members',
    () => {
      // Arrange
      const expectedResult = [
        { name: 'Foo', member: true },
        { name: 'Fizz', member: true },
        { name: 'FizzBuzz', member: true },
      ];

      // Act
      const result = customersWhoBelongToMembership(CUSTOMERS_LIST);
      // Assert
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
    'When the list contains customers who are not members, Then it should return an empty array',
    () => {
      // Arrange
      // Act
      // Assert
    },
  );

  it.todo(
    'When the list contains only customers who are members, Then it should return the same array',
    () => {
      // Arrange
      // Act
      // Assert
    },
  );
});
