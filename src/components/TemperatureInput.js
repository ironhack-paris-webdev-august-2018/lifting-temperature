import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput (props) {
  const { scale, temperature, onTempChange } = props;
  return (
    <section>
      {/* IF scale="c" scaleNames[scale] is the same as scaleNames.c */}
      <h3>Temperature in {scaleNames[scale]}</h3>
      {/* no form because we want changes to happen without submitting */}
      <label>
        Current Temperature:
        <input value={temperature} onChange={onTempChange}
            type="number" placeholder="18" />
      </label>
    </section>
  );
}

export default TemperatureInput;
