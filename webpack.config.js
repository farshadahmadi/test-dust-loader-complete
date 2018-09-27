const path = require('path');
const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname,"src"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.join(__dirname,"dist"),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/dist/'
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
		alias: {
      'dustjs' : 'dustjs-linkedin'
		}
	},
  module: {
    rules: [
      {
        test: /\.dust$/,
        use : [
          {
            loader: "dust-loader-complete",
            options:{
              root: path.join(__dirname, "src","templates"),
              verbose: true,
              dustAlias: "dustjs"
          }
          }
        ]
      }
    ]
  }/*,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]*/
};