import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: "",
      capital: "",
      flag: "",
      populaion: "",
      region: "",
    };

    this.getCountry = this.getCountry.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.loaded = this.loaded.bind(this);
  }
  async startLoading() {
    await this.setState({ loading: true });
  }
  async loaded() {
    await this.setState({ loading: false });
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
      })
      .then(this.loaded);
  }

  async getCountry(country) {
    await this.setState({ name: country });
    await fetch("https://restcountries.com/v3.1/name/" + this.state.name)
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
      })
      .then(this.loaded);
  }

  render() {
    if (this.state.loading === false) {
      return (
        <div>
          <h1>Country selector</h1>
          <div className="myButton d-flex justify-content-center ">
            <Button onClick={this.getCountry}>France</Button>
            <Button onClick={this.getCountry}>Brazil</Button>
            <Button onClick={this.getCountry}>Croatia</Button>
          </div>
          <div className="d-flex justify-content-center">
            <Card
              name={this.state.name}
              capital={this.state.capital}
              flag={this.state.flag}
              population={this.state.population}
              region={this.state.region}
            />
          </div>
        </div>
      );
    } else if (this.state.loading === true) {
      return <h1>Loading</h1>;
    }
  }
}
export default App;
