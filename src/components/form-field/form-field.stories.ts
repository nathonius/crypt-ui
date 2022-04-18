import "./form-field.scss";
import formFieldBasic from "./form-field-basic.html";
import formFieldStacked from "./form-field-stacked.html";
import formFieldFull from "./form-field-full.html";

export default {
  title: "Components/Form Field",
  parameters: { layout: "centered" },
};

export const basic = () => formFieldBasic;
export const stacked = () => formFieldStacked;
export const full = () => formFieldFull;
