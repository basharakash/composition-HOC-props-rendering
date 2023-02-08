import React from "react";

const WithCounter = (OriginalComponent) => {
  class newComponent extends React.Component {
    state = {
      count: 0,
    };

    setIncrementCounter = () => {
      this.setState((prevstate) => ({
        count: prevstate.count + 1,
      }));
    };
    render() {
      const { count } = this.state;
      return (
        <OriginalComponent
          count={count}
          setIncrementCounter={this.setIncrementCounter}
        />
      );
    }
  }
  return newComponent;
};

export default WithCounter;
