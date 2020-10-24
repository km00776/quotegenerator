import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import QuoteGenerator from "./quotegenerator";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


export default class QuoteFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "wewew",
      quoteAuthor: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }



  componentDidMount() {
     fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            quoteAuthor: result.author,
            quote: result.quote
          });
        },
      )
  }

  

handleClick() {
     fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(res => res.json())
    .then(
      (result) => {
       this.setState({
          quoteAuthor: result.author,
          quote: result.quote
        });
      },
    )
   }



  render() {
    return (
      <Fragment>
        <QuoteGenerator quote={this.state.quote} quoteAuthor={this.state.quoteAuthor}></QuoteGenerator>
        <button class="ui positive basic button" onClick={this.handleClick}>New Quote</button>
        <div className="centerContent">
          <div className="selfCenter">
            <TwitterShareButton url="https://facebook.com/saurabhnemade" options={{
              text: this.state.quote,
              via: 'saurabhnemade',
              size: 'large',
            }} placeholder={<div />} />
          </div>
        </div>
        
      </Fragment>
    );
  }
}
