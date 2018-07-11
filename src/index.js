import * as data from './data';

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
export function text() {
  return getRandomItemFromArray(data.texts);
}


/**
 * Get random text
 * @see titles
 * @returns {string} - Random text
 */
export function title() {
  return getRandomItemFromArray(data.titles);
}

/**
 * Get random paragraph
 * @see paragraphs
 * @returns {string} - Random text
 */
export function paragraph() {
  return getRandomItemFromArray(data.paragraphs);
}

/**
 * Get random image
 * @see images
 * @returns {string} - random image source path
 */
export function image() {
  return getRandomItemFromArray(data.images);
}
