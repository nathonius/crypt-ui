const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    { name: "@storybook/addon-essentials", options: { controls: false } },
    "@storybook/addon-design-assets/register",
    "@storybook/addon-notes/register",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../src"),
    });
    return config;
  },
};
