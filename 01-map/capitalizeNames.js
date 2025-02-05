/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

/**
 * Capitalizes the first letter of each name in an array of names.
 *
 * @param {string[]} namesList - An array of names to be capitalized.
 * @returns {string[]} An array of names with the first letter capitalized and the rest in lowercase.
 */

export function capitalizeNames(namesList) {
  return namesList.map((name) => {
    const lowercaseName = name.toLowerCase();
    const firstLetterofName = lowercaseName.charAt(0).toUpperCase();
    const restOfName = lowercaseName.slice(1);
    const capitalizedName = `${firstLetterofName}${restOfName}`;

    return capitalizedName;
  });
}
