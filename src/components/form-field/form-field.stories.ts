import "./form-field.scss";
import formFieldBasic from "./form-field-basic.html";
import formFieldStacked from "./form-field-stacked.html";
import formFieldFull from "./form-field-full.html";
import formFieldCount from "./form-field-count.html";
import formFieldSelect from "./form-field-select.html";

export default {
  title: "Components/Form Field",
  parameters: { layout: "centered" },
};

export const basic = () => formFieldBasic;
export const stacked = () => formFieldStacked;
export const full = () => formFieldFull;
export const select = () => formFieldSelect;
export const count = () => formFieldCount;
