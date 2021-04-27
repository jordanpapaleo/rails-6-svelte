/* eslint-disable @typescript-eslint/no-var-requires */
const { environment } = require('@rails/webpacker')
const svelte = require('./loaders/svelte')

environment.loaders.prepend('svelte', svelte)
module.exports = environment
