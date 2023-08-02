import React from "react";
import { Card } from "./Card";
export function Cards(props) {
  return (
    <>
      <Card
        image={props.data[0].image}
        title={props.data[0].title}
        description={props.data[0].description}
      />
      <Card
        image={props.data[1].image}
        title={props.data[1].title}
        description={props.data[1].description}
      />
      <Card
        image={props.data[2].image}
        title={props.data[2].title}
        description={props.data[2].description}
      />
    </>
  );
}
