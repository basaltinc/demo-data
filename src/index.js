const { resolve } = require('url');
const data = require('./data');

const baseUrl = 'https://basalt-demo-data.netlify.com';

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
  return myArray[Math.floor(Math.random() * myArray.length)];
}

/**
 * Get random text
 * @see texts
 * @returns {string} - Random text
 */
function text() {
  return capitalize(getRandomItemFromArray(data.texts));
}


/**
 * Get random text
 * @see titles
 * @returns {string} - Random text
 */
function title() {
  return capitalize(getRandomItemFromArray(data.titles));
}

/**
 * Get random paragraph
 * @see paragraphs
 * @returns {string} - Random text
 */
function paragraph() {
  return getRandomItemFromArray(data.paragraphs);
}

/**
 * Get random image
 * @see images
 * @returns {string} - random image source path
 */
function image() {
  return resolve(baseUrl, getRandomItemFromArray(data.images));
}

module.exports = {
  text,
  title,
  paragraph,
  image,
};
