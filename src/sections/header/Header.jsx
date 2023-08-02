import React from "react";
import { MoreButton } from "../MoreButton";
import headerStyles from "./Header.module.css";

export function Header() {
  const btnText = "Read more";
  return (
    <div className={headerStyles.headerContainer}>
      <h1 className={headerStyles.headerText}>What we do</h1>
      <MoreButton btnText={btnText} />
    </div>
  );
}
