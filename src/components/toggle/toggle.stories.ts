import "./toggle.scss";
import toggleSquare from "./toggle-square.html";
import toggleRound from "./toggle-round.html";
import toggleColors from "./toggle-colors.html";

export default {
  title: "Components/Toggle",
  parameters: { layout: "centered" },
};

export const square = () => toggleSquare;
export const round = () => toggleRound;
export const colors = () => toggleColors;
