module.exports = {
  requirePragma: true,
  overrides: [
    {
      files: '{src,stories}/**/*.tsx',
      options: {
        printWidth: 100,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        requirePragma: false,
      },
    },
    {
      files: '**/**/*.ts',
      options: {
        trailingComma: 'es5',
      },
    },
  ],
};
