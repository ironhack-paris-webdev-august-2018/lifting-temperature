import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

class TemperatureCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "",
      fahrenheit: "",
    };
  }

  updateCelsius(event) {
    // "event.target" is the <input> tag that has the "onChange"
    const { value } = event.target;
    // set the state the input's new VALUE
    this.setState({
      celsius: value,
      fahrenheit: toFahrenheit(value),
    });
  }

  updateFahrenheit(event) {
    // "event.target" is the <input> tag that has the "onChange"
    const { value } = event.target;
    // set the state the input's new VALUE
    this.setState({
      celsius: toCelsius(value),
      fahrenheit: value,
    });
  }

  render() {
    const { celsius, fahrenheit } = this.state;
    return (
      <section>
        <h2>Temperature Calculator</h2>
        <TemperatureInput scale="c" temperature={celsius}
            onTempChange={(event) => this.updateCelsius(event)} />
        <TemperatureInput scale="f" temperature={fahrenheit}
            onTempChange={(event) => this.updateFahrenheit(event)} />

        <BoilingVerdict celsius={celsius} />
      </section>
    );
  }
}

export default TemperatureCalculator;
