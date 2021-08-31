

const babelOptions = {
  presets: ["babel-preset-gatsby","@babel/plugin-syntax-jsx", "@babel/preset-react"],
}


module.exports = require("babel-jest").default.createTransformer(babelOptions);
