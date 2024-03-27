module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@routes': './src/routes',
          '@context': './src/context',
          '@helpers': './src/helpers',
          '@components': './src/components',
        },
      },
    ],
  ],
};
