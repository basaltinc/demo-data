const { lorem } = require('faker');
const {
  sentence,
  sentences,
  words,
  paragraph,
  text,
} = lorem;

/** @type {string[]} */
const images = [
  'imagePlaceholder1.png',
  'imagePlaceholder2.png',
  'imagePlaceholder3.png',
  'imagePlaceholderA.png',
  'imagePlaceholderB.png',
  'imagePlaceholderC.png',
];

/** @type {string[]} */
const texts = [
  words(2),
  words(3),
  words(4),
  words(5),
  words(2),
  words(3),
  words(4),
  words(5),
];

/** @type {string[]} */
const titles = [
  words(5),
  words(6),
  words(7),
  words(5),
  words(6),
  words(7),
  words(5),
  words(6),
  words(7),
];

/** @type {string[]} */
const paragraphs = [
  paragraph(3),
  paragraph(4),
  paragraph(5),
];

module.exports = {
  images,
  texts,
  titles,
  paragraphs,
};
