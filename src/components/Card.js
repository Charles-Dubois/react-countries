import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.flag}
          className="card-img-top"
          alt={`Drapeau de ${this.props.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">Country : </h5>
          <h5 className="card-title">{this.props.name}</h5>

          <p className="card-text">
            <b>Population :</b> {this.props.population}
            <br />
            <b>Region :</b> {this.props.region}
          </p>
          <p className="test">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            aperiam officiis placeat eveniet sit recusandae possimus dolorem
            minus aut fugit?
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
