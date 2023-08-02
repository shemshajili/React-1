import React from "react";
import moreBtn from "./MoreButton.module.css";
import arrowIcon from "../images/link_orange_icon.svg";
export function MoreButton(props) {
  return (
    <div>
      <button className={moreBtn.moreBtn}>
        <a className={moreBtn.btnLink}>{props.btnText}</a>
        <img className={moreBtn.orangeArrow} src={arrowIcon} alt="Arrow Icon" />
      </button>
    </div>
  );
}