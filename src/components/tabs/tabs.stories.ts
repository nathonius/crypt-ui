import "./tabs.scss";
import tabsLarge from "./tabs-large.html";
import tabsSmall from "./tabs-small.html";
import tabsColors from "./tabs-colors.html";

export default {
  title: "Components/Tabs",
  parameters: { layout: "centered" },
};

export const large = () => tabsLarge;
export const small = () => tabsSmall;
export const colors = () => tabsColors;
