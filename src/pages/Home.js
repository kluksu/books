import React, { Component } from "react";

import { APIKey, getData } from "../components/Utils";
import Card from "../components/Card";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      booksList: [],
    };
  }

  searchForBooks = () => {
    this.setState({ errorText: "" });
    getData(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchText}&maxResults=10&key=${APIKey}`
    ).then((res) => {
      console.log(res);
      this.setState({ booksList: res.items });
      if (res === undefined || res.totalItems == 0 || res.error) {
        this.setState({
          errorText: "no results where found, please search again",
        });
      }
    });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.searchText);
  };
  //  componentDidUpdate(prevProps,prevState){
  //      if(this.state.booksList!==prevState.booksList && (this.state.booksList===undefined || this.state.booksList.length==0)){
  //         this.setState({errorText:"no results where found, please search again"})

  //      }
  //  }
  render() {
    let cards = [];
    if (this.state.booksList !== undefined) {
      this.state.booksList.forEach((book) => {
        let picture = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : "";
        cards.push(
          <Card
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            picture={picture}
          ></Card>
        );
      });
    }

    return (
      <div>
        <div className="upperContainer">
          <h1>books Search</h1>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              onChange={(event) => this.handleChange(event)}
              className="searchBox"
              name="searchText"
            ></input>
            <button type="button" onClick={this.searchForBooks}>
              search
            </button>
          </form>
        </div>
        <div className="cardsContainer"></div>
        <h1 className="errorText">{this.state.errorText}</h1>

        <div className="cardsContainer">{cards}</div>
      </div>
    );
  }
}
