const { resolve } = require('url');
const {
  getRandomItemFromArray,
  getRandomNumberBetween,
  capitalize,
 } = require('./utils');
const data = require('./data');

const baseUrl = 'https://basalt-demo-data.netlify.com';

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
  getRandomItemFromArray,
  getRandomNumberBetween,
};
