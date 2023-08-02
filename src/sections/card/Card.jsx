import React from "react";
import cardStyles from "./Card.module.css";

export function Card(props) {
  console.log(props);
  return (
    <div className={cardStyles.cardContainer}>
      <img className={cardStyles.cardImages} src={props.image} alt="" />
      <h3 className={cardStyles.cardTitle}>{props.title}</h3>
      <p className={cardStyles.cardDescription}>{props.description}</p>
    </div>
  );
}
