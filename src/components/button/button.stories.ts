import "./button.scss";
import buttonSquare from "./button-square.html";
import buttonRound from "./button-round.html";
import buttonColors from "./button-colors.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const square = () => buttonSquare;
export const round = () => buttonRound;
export const colors = () => buttonColors;
