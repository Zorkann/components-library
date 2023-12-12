import React, { useState } from "react";
import css from "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [state, setState] = useState("");
  return (
    <button className={css.test_button}>
      {props.label}
      {state}
    </button>
  );
};

export default Button;
