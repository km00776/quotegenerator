import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function QuoteGenerator(props) {

    return (
      <Fragment>
        <div id="quote-box">
            <p id ="text">{props.quoteAuthor}</p>
            <p id ="text">{props.quote}</p>
            
            
        </div>
      </Fragment>
    );
  }
  
 
