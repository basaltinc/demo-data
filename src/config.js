const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  /**
   * Should demo data results return random items?
   * We keep it false on prod so visual regression testing doesn't create false positives
   * @type {boolean}
   */
  randomizedResults: !isProd,
};
