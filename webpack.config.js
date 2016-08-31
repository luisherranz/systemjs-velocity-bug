module.exports = {
  entry: {
    core: [
      'script!systemjs/dist/system.js',
      './index.js',
    ],
  },
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
};
