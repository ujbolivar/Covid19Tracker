import React from "react";

import Cards from "./Components/Cards/Cards.component";
import Chart from "./Components/Chart/Chart.component";
import CountryPicker from "./Components/CountryPicker/CountryPicker.component";
//import { Cards, Chart, CountryPicker } from "./Components";

import styles from "./App.module.css";

import { fetchData } from "./Api";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
