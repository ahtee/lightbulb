// styleguide.config.js
const path = require('path');

module.exports = {
  theme: {
    color: {
      link: '#005eb8',
      linkHover: '#00b5e2'
    }
  },
  components: 'src/**/[A-Z]*.js',
  ignore: ['GlobalStyles.js', 'NavBrand.js', 'NavBreadcrumbs.js'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/ThemeWrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
