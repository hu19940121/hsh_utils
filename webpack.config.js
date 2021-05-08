const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) =>  {
  const mode = env.env 
  let plugins = []
  let entry = ''
  if (mode === 'development') {
    entry = './src/index.js'
    plugins.push(new HtmlWebpackPlugin())
  } else {
    entry = './lib/utils.js'
  }
  return {
    entry,
    mode,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'hsh_utils.js',
      libraryTarget: 'umd',
      library: "hsh_utils",
      clean: true,
      globalObject: 'this'
    },
    devServer: {
      port: 9999,
      open: true,
      hot: true
    },
    plugins,
  }

} 