const fs = require('fs');
const path = require('path');
const { lorem } = require('faker/locale/en');
const { getRandomNumberBetween } = require('./utils');
const {
  sentence,
  sentences,
  words,
  paragraph,
  text,
} = lorem;

const data = {
  texts: [],
  titles: [],
  paragraphs: [],
};

for (let i = 0; i < 100; i++) {
  data.texts.push(words(getRandomNumberBetween(2, 5)));
  data.titles.push(words(getRandomNumberBetween(5, 7)));
  data.paragraphs.push(paragraph(getRandomNumberBetween(3, 5)));
}

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, '  '));
console.log('Done generating data.');
