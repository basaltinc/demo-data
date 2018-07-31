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
  'basalt-brand-stock/adam-birkett-182279.jpg',
  'basalt-brand-stock/annie-spratt-294450.jpg',
  'basalt-brand-stock/basalt2bw--cropped.jpg',
  'basalt-brand-stock/basalt4bw.jpg',
  'basalt-brand-stock/chris-schog-271197.jpg',
  'basalt-brand-stock/clarisse-meyer-304306.jpg',
  'basalt-brand-stock/domenico-loia-310197.jpg',
  'basalt-brand-stock/julentto-photography-184055.jpg',
  'basalt-brand-stock/milada-vigerova-66601.jpg',
  'basalt-brand-stock/parker-byrd-139348.jpg',
  'basalt-brand-stock/rawpixel-com-191102.jpg',
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
