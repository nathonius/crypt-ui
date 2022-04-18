import { addParameters } from "@storybook/html"; // <- or your storybook framework
import { themes } from "@storybook/theming";
import "@storybook/addon-console";
import "../src/crypt.scss";
import "../src/defaults.scss";

addParameters({
  a11y: {
    config: {},
    options: {},
  },
  layout: "fullscreen",
  docs: {
    theme: themes.dark,
  },
});
