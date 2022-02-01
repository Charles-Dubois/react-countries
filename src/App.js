import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "", capital: "", flag: "", populaion: "", region: "" };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/name/france")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital[0],
          flag: res[0].flags.png,
          population: res[0].population,
          region: res[0].region,
        });
        console.log(this.state.capital);
      });
  }
  render() {
    return (
      <>
        <p>Hello wolrd</p>
        <p>
          Pays: {this.state.name} <br />
          Capital: {this.state.capital} <br />
          Drapeau:{" "}
          <img
            src={this.state.flag}
            alt={`Drapeau de ${this.state.name}`}
          />{" "}
          <br />
          Population:{this.state.population}
          <br />
          Region: {this.state.region}
        </p>
      </>
    );
  }
}
export default App;
