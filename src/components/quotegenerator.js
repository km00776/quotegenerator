import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";

export default function QuoteGenerator(props) {
  return (
    <Fragment>
      <div id="quote-box">
        <p id="text">{props.quote}</p>
        <p id="text"> </p>
        <button id="quote-box"></button>
      </div>
    </Fragment>
  );
}
