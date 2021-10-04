module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(process.cwd() + '/node_modules')
    config.resolve.modules.push(process.cwd() + '/stories')

    // this is needed for working w/ linked folders
    config.resolve.symlinks = false
    return config
  }
}
