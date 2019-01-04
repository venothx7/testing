import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text1" name="city" placeholder="City.." />
        <input type="text2" name="country" placeholder="Country.." />
        <button> Get Weather</button>
      </form>
    );
  }
}
export default Form;
