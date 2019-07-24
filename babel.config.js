module.exports = api => {
  const env = api.env();
  console.log('env', env);
  const es = env === 'esm';
  return {
    presets: [
      [
        '@babel/preset-react',
        {
          useBuiltIns: true,
        }
      ],
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          useBuiltIns: es ? 'entry' : false,
          corejs: es ? 3 : false,
        }
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        // Remove PropTypes from production build
        'babel-plugin-transform-react-remove-prop-types',
        {
          removeImport: true,
        },
      ],
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: es ? 3 : false,
        }
      ]
    ],
    ignore: [
      '**/*.test.tsx',
      '**/types',
      '**/interface.tsx',
      '**/global.d.ts',
      '**/setupEnzyme.ts'
    ],
    // minified: true,
    comments: false
  }
}
