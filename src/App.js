import React from "react";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: "france",
      capital: "",
      flag: "",
      populaion: "",
      region: "",
    };
    this.changeCountryBrazil = this.changeCountryBrazil.bind(this);
    this.changeCountryFrance = this.changeCountryFrance.bind(this);
    this.changeCountryCroatia = this.changeCountryCroatia.bind(this);
    this.getCountry = this.getCountry.bind(this);
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
      });
  }

  getCountry(country) {
    fetch("https://restcountries.com/v3.1/name/" + this.state.name)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital[0],
          flag: res[0].flags.svg,
          population: res[0].population,
          region: res[0].region,
        });
      });
    console.log(this.state.capital);
  }
  changeCountryFrance(country) {
    this.setState({ name: country });
    this.getCountry(country);
  }
  changeCountryBrazil(country) {
    this.setState({ name: country });
    this.getCountry(country);
  }
  changeCountryCroatia(country) {
    this.setState({ name: country });
    this.getCountry(country);
  }

  render() {
    if (this.state.loading === false) {
      return (
        <>
          <Button onClick={this.changeCountryFrance}>France</Button>
          <Button onClick={this.changeCountryBrazil}>Brazil</Button>
          <Button onClick={this.changeCountryCroatia}>Croatia</Button>
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
    } else if (this.state.loading === true) {
      return <h1>Loading</h1>;
    }
  }
}
export default App;
