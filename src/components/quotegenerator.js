import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function QuoteGenerator(props) {

  return (
    <Fragment>
      <div id="quote-box">
        <p id="text">{props.quoteAuthor}</p>
        <p id="text">{props.quote}</p>
      
        <a className="twitter-share-button btn btn-primary" href={`https://twitter.com/intent/tweet?text=${props.quote}`}>
        <button class="ui twitter button">
          <i class="twitter icon"></i>
            Twitter
        </button>
        </a>
        <button class="ui positive basic button" onClick={props.handleClick}>New Quote</button>
      </div>
    </Fragment>
  );
}


