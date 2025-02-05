import {
  describe,
  it,
  expect
} from 'vitest';
import {
  getTotalVoters
} from './getTotalVoters.js';

describe('Given getTotalVoters', () => {
  it('When the list contains voters who have voted and voters who have not, Then it should return the total number of voters who have voted', () => {
    // Arrange
    const VOTERS = [{
        name: 'Bob',
        age: 30,
        hasVoted: true
      },
      {
        name: 'Jake',
        age: 32,
        hasVoted: true
      },
      {
        name: 'Kate',
        age: 25,
        hasVoted: false
      },
      {
        name: 'Sam',
        age: 20,
        hasVoted: false
      },
      {
        name: 'Phil',
        age: 21,
        hasVoted: true
      },
      {
        name: 'Ed',
        age: 55,
        hasVoted: true
      },
      {
        name: 'Tami',
        age: 54,
        hasVoted: true
      },
      {
        name: 'Mary',
        age: 31,
        hasVoted: false
      },
      {
        name: 'Becky',
        age: 43,
        hasVoted: false
      },
      {
        name: 'Joey',
        age: 41,
        hasVoted: true
      },
      {
        name: 'Jeff',
        age: 30,
        hasVoted: true
      },
      {
        name: 'Zack',
        age: 19,
        hasVoted: false
      },
    ];
    const expectedResult = 7;

    // Act
    const result = getTotalVoters(VOTERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only voters who have not voted, Then it should return 0', () => {
    // Arrange
    const NO_VOTERS = [{
        name: 'Kate',
        age: 25,
        hasVoted: false
      },
      {
        name: 'Sam',
        age: 20,
        hasVoted: false
      },
      {
        name: 'Mary',
        age: 31,
        hasVoted: false
      },
      {
        name: 'Becky',
        age: 43,
        hasVoted: false
      },
      {
        name: 'Zack',
        age: 19,
        hasVoted: false
      },
    ];
    const expectedResult = 0;

    // Act
    const result = getTotalVoters(NO_VOTERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only voters who have voted, Then it should return the total number of voters', () => {
    // Arrange
    const ALL_VOTERS = [{
        name: 'Bob',
        age: 30,
        hasVoted: true
      },
      {
        name: 'Jake',
        age: 32,
        hasVoted: true
      },
      {
        name: 'Phil',
        age: 21,
        hasVoted: true
      },
      {
        name: 'Ed',
        age: 55,
        hasVoted: true
      },
      {
        name: 'Tami',
        age: 54,
        hasVoted: true
      },
      {
        name: 'Joey',
        age: 41,
        hasVoted: true
      },
      {
        name: 'Jeff',
        age: 30,
        hasVoted: true
      },
    ];
    const expectedResult = 7;

    // Act
    const result = getTotalVoters(ALL_VOTERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list is empty, Then it should return 0', () => {
    // Arrange
    const EMPTY_VOTERS = [];
    const expectedResult = 0;

    // Act
    const result = getTotalVoters(EMPTY_VOTERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only one voter who has voted, Then it should return 1', () => {
    // Arrange
    const SINGLE_VOTER = [{
      name: 'Kate',
      age: 25,
      hasVoted: true
    }];
    const expectedResult = 1;

    // Act
    const result = getTotalVoters(SINGLE_VOTER);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When the list contains only one voter who has not voted, Then it should return 0', () => {
    // Arrange
    const SINGLE_NON_VOTER = [{
      name: 'Kate',
      age: 25,
      hasVoted: false
    }];
    const expectedResult = 0;

    // Act
    const result = getTotalVoters(SINGLE_NON_VOTER);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
