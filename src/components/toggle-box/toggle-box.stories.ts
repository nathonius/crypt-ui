import "./toggle-box.scss";
import toggleBoxSquare from "./toggle-box-square.html";
import toggleBoxRound from "./toggle-box-round.html";
import toggleBoxText from "./toggle-box-text.html";
import toggleBoxColors from "./toggle-box-colors.html";

export default {
  title: "Components/Toggle Box",
  parameters: { layout: "centered" },
};

export const square = () => toggleBoxSquare;
export const round = () => toggleBoxRound;
export const text = () => toggleBoxText;
export const colors = () => toggleBoxColors;
