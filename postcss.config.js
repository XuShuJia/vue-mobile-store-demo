/* eslint-disable no-undef */
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      propList: ["*"],
      rootValue: 14,
      unitPrecision: 5,
      // propList: ["font", "font-size", "line-height", "letter-spacing"]
      selectorBlackList: ["html"]
      // replace: true,
      // mediaQuery: false,
      // minPixelValue: 0,
      // exclude: /node_modules/i
    }
  }
};
