const path = require('path');

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
  }
};