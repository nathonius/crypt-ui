module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-svelte-csf",
  ],
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: require("svelte-preprocess")(),
    compilerOptions: {
      css: true,
    },
    emitCss: false,
  },
};
