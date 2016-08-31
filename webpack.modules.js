module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'velocity-react',
    ],
  },
  output: {
    path: 'dist',
    filename: 'modules.js',
    library: 'modules',
    libraryTarget: 'commonjs2',
  },
};
