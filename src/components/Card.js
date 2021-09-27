import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="myCard">
        <div className="title">{this.props.title}</div>

        <img src={this.props.picture}></img>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}
