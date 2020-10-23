import React, {Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';
import QuoteGenerator from './quotegenerator';

export default class QuoteFetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            quoteAuthor:""
        }

        this.getApiQuote = this.getApiQuote.bind(this);
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

      async getApiQuote() {
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
        return(
            <Fragment>
            <QuoteGenerator quote={this.state.quote} quoteAuthor={this.state.quoteAuthor}></QuoteGenerator>
            <button onClick = {this.getApiQuote}></button>
            </Fragment>
        );
    }
}