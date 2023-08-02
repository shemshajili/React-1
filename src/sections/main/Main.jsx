import React from "react";
import mainStyles from "./Main.module.css";
import { Cards } from "../card/Cards";
import imageOne from "../../images/1.svg";
import imageTwo from "../../images/2.svg";
import imageThree from "../../images/3.svg";

export function Main() {
  const cardData = [
    {
        image: imageOne,
        title: "AI & ML based Scoring",
        description:
          "We determine the credit-worthiness of each client, using behavioral scoring model.",
      },
      {
        image: imageTwo,
        title: "Micro-lending Technology",
        description:
          "We deliver microlending solution which includes processing, disbursement, repayment, recovery and management of loans.",
      },
      {
        image: imageThree,
        title: "Big Data Engine",
        description:
          "We use latest advancements in Artificial Intelligence and Machine Learning to maximize our value proposition.",
      },
  ];

  return (
    <div className={mainStyles.cardWrapper}>
      <Cards data={cardData} />
    </div>
  );
}
