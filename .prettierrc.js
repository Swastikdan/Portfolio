module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  astroSortOrder: "markup | styles",
  astroAllowShorthand: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};