import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import QuoteGenerator from "./quotegenerator";

export default class QuoteFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "test",
      quoteAuthor: "",
    };
  }

  componentDidMount() {
    fetch("").then((res) => res.json);
  }

  render() {
    return (
      <QuoteGenerator
        quote={this.state.quote}
        quoteAuthor={this.state.quoteAuthor}
      ></QuoteGenerator>
    );
  }
}
