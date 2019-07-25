module.exports = api => {
  const env = api.env();
  console.log('env', env);
  const lib = env === 'lib';
  return {
    presets: [
      [
        '@babel/preset-react',
      ],
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          modules: lib ? 'cjs' : false,
        }
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      [
        // Remove PropTypes from production build
        'babel-plugin-transform-react-remove-prop-types',
        {
          removeImport: true,
        },
      ],
    ],
    ignore: [
      '**/*.test.tsx',
      '**/types',
      '**/interface.tsx',
      '**/global.d.ts',
      '**/setupEnzyme.ts'
    ],
    // minified: true,
    comments: false,
    compact: true
  }
}
