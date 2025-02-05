// const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

/**
 * Extracts countries with names that have five characters or fewer.
 *
 * @param {string[]} countriesList - An array of country names.
 * @returns {string[]} An array of country names that have five characters or fewer.
 */

export function extractCountriesWithFiveCharactersOrFewer(countriesList) {
  const threshold = 5;

  const countriesWithFiveCharactersOrFewer = countriesList.filter((country) => {
    const countryLength = country.length;
    const isShortEnough = countryLength <= threshold;

    return isShortEnough;
  });

  return countriesWithFiveCharactersOrFewer;
}
