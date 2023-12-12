import React from "react";
import css from "./Card.css";

export interface CardProps {
  text: string;
}

const Card = (props: CardProps) => {
  return <div className={css.test_card}>Cardx {props.text}</div>;
};

export default Card;
