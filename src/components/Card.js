import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <p>
          Pays: {this.props.name} <br />
          Capital: {this.props.capital} <br />
          Drapeau:
          <img src={this.props.flag} alt={`Drapeau de ${this.props.name}`} />
          <br />
          Population:{this.props.population}
          <br />
          Region: {this.props.region}
        </p>
      </>
    );
  }
}
export default Card;
