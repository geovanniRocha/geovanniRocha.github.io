const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new NodemonPlugin(), 
  // ],
  watch: true,
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 300,
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
                ie8:true
            }
          })
        ]
  }
};