import "./Seasons.css";
import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  display() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>err={this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <Spinner message="Please, allow your location to be determined..." />
    );
  }

  render() {
    return <div>{this.display()}</div>;
  }
}

export default App;
