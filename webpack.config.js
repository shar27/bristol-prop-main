const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,              // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add React preset
          },
        },
      },
      // ...other rules (e.g. CSS, images) if you have them...
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],               // Resolve these extensions
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
