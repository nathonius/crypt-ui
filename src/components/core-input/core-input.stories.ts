import "./core-input.scss";
import coreInputLarge from "./core-input-large.html";
import coreInputSmall from "./core-input-small.html";
import coreInputColors from "./core-input-colors.html";

export default {
  title: "Components/Core Input",
  parameters: { layout: "centered" },
};

export const large = () => coreInputLarge;
export const small = () => coreInputSmall;
export const colors = () => coreInputColors;
