module.exports = {
  entry: "./public/jsx/components/App.js",
  output: {
      filename: "public/build/js/common-bundle.js"
  },
  module: {
    loaders: [{
      text: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: "babel"
    }]
  }
}
