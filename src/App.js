import React from "react";

import Cards from "./Components/Cards/Cards.component";
import Chart from "./Components/Chart/Chart.component";
import CountryPicker from "./Components/CountryPicker/CountryPicker.component";

//import { Cards, Chart, CountryPicker } from "./Components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
