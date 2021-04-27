module.exports = {
  test: /\.svelte(\.erb)?$/,
  use: [
    {
      loader: 'svelte-loader',
      options: {
        hotReload: false,
        preprocess: require('svelte-preprocess')({
          // ...svelte-preprocess options
          aliases: [
            ['ts', 'typescript'],
          ],
        }),
      },
    },
  ],
}
