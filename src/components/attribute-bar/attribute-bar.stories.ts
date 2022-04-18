import "./attribute-bar.scss";
import attributeBar from "./attribute-bar.html";
import attributeBarColors from "./attribute-bar-colors.html";

export default {
  title: "Components/Attribute Bar",
  parameters: { layout: "centered" },
};

export const bar = () => attributeBar;
export const colors = () => attributeBarColors;
