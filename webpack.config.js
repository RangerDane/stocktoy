module.exports = {
  context: __dirname,
  entry: "./app/entry.js",
  output: {
    path: "./js/",
    filename: "stocktoy.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js"]
  }
};
