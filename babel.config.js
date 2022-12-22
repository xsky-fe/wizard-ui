module.exports = api => {
  const env = api.env();
  console.log('env', env);
  const lib = env === 'lib';
  const esm = env === 'esm';
  let result = {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          modules: lib ? 'cjs' : false,
          targets: {
            node: 'current'
          }
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
      "@babel/plugin-transform-react-jsx", {
        "throwIfNamespace": false
      }
    ],
    ignore: [
      '**/*.test.tsx',
      '**/types',
      '**/interface.tsx',
      '**/global.d.ts',
    ],
    // minified: true,
    // comments: false,
    // compact: true,
  };

  if (lib || esm) {
    result.plugins.push([
      'transform-rename-import',
      {
        "original": '^(.+?)\\.scss$',
        "replacement": '$1.css'
      }
    ])
  }

  return result;
}
