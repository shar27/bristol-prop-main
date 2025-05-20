module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/, // Match all .js files
          exclude: /node_modules/, // Exclude node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // Transpile modern JS syntax
            },
          },
        },
      ],
    },
  };
  