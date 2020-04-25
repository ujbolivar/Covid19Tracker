import React from "react";

import Cards from "./Components/Cards/Cards.component";
import Chart from "./Components/Chart/Chart.component";
import CountryPicker from "./Components/CountryPicker/CountryPicker.component";
//import { Cards, Chart, CountryPicker } from "./Components";

import { fetchData } from "./Api";

import coronaImage from "./images/covid image.png";

import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className='styles.image' src={coronaImage} alt='COVID-19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
