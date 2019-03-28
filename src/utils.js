const { randomizedResults } = require('./config');

/**
 * Capitalize string
 * `hi there` => `Hi there`
 * @param {string} string - String to alter
 * @returns {string} - The `string` with first character uppercase.
 */
function capitalize(string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Get random item from an array
 * @param myArray {array}
 * @returns {*} - a random item from `myArray`
 */
function getRandomItemFromArray(myArray) {
  return randomizedResults
    ? myArray[Math.floor(Math.random() * myArray.length)]
    : myArray[0];
}

/**
 * Get Random Number Between two
 * @param {number} min
 * @param {number} max
 */
function getRandomNumberBetween(min, max) {
  return randomizedResults
    ? Math.floor(Math.random() * max) + min
    : min; // @todo make it the average between `min` and `max`
}

module.exports = {
  capitalize,
  getRandomItemFromArray,
  getRandomNumberBetween,
};
