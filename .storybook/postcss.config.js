module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      browsers: 'last 2 versions'
    },
    'postcss-url': {},
    'postcss-import': { root: file.dirname },
    'cssnano': env === 'production' ? options.cssnano : false,
    'postcss-nested': {},
    'postcss-modules': {}
  }
})