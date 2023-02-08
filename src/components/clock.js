import React from "react";
import Button from "./button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }

  componentDidMount() {
    this.setTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setTimer);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  //! handle click function

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text"> {date.toLocaleTimeString(locale)}</span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US">
            Click hare
          </Button>
        ) : (
          <Button change={this.handleClick} locale="bn-BD">
            Click hare
          </Button>
        )}
      </div>
    );
  }
}
export default Clock;
