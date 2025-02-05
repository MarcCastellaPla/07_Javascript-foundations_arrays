import {
  describe,
  it,
  expect
} from 'vitest';
import {
  extendUsersSettings
} from './extendUsersSettings.js';

describe('Given extendUsersSettings', () => {
  it('When an array of users is given, Then it should return an array of users with id and isEnabled properties', () => {
    // Arrange
    const USERS = [{
        email: 'lindsay.ferguson@reqres.in',
        firstName: 'Lindsay',
        lastName: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
      {
        email: 'michael.lawson@reqres.in',
        firstName: 'Michael',
        lastName: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
      },
      {
        email: 'tobias.funke@reqres.in',
        firstName: 'Tobias',
        lastName: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      },
    ];

    const expectedResult = [{
        email: 'lindsay.ferguson@reqres.in',
        firstName: 'Lindsay',
        lastName: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
        id: 0,
        isEnabled: true,
      },
      {
        email: 'michael.lawson@reqres.in',
        firstName: 'Michael',
        lastName: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
        id: 1,
        isEnabled: true,
      },
      {
        email: 'tobias.funke@reqres.in',
        firstName: 'Tobias',
        lastName: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
        id: 2,
        isEnabled: true,
      },
    ];

    // Act
    const result = extendUsersSettings(USERS);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('When an empty array is given, Then it should return an empty array', () => {
    // Arrange
    const expectedResult = [];

    // Act
    const result = extendUsersSettings([]);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
