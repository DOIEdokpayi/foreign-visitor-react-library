module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },{
        loader:'string-replace-loader',
        options:{
          search:'.css',
          replace:'.css.json'
        }
      }
    ],
  },
    {
      test: /\.css$/,
      use: [
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './.storybook'
          }
        }
      }]
    });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};