import React from "react";
import Section from "./components/Contexts/Section";
import ClickCounter from "./components/RenderProps/ClickCounter";
import Counter from "./components/RenderProps/Counter";
// import HoverCounter from "./components/RenderProps/HoverCounter";
import ThemeContext from "./components/Contexts/ThemeContex";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };

  switchTheme = () => {
    this.setState(({theme}) => {
      if (theme === "dark") {
        return {
          theme: "light",
        };
      } else {
        return {
          theme: "dark",
        };
      }
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <h1>hello world</h1>
        <Counter>
          {(count, IncrementCount) => (
            <ClickCounter count={count} IncrementCount={IncrementCount} />
          )}
        </Counter>

        {/* <Counter>
              {(count, IncrementCount) => (
                  <HoverCounter count={count} IncrementCount={IncrementCount} />
              )}
                  </Counter> */}

        <ThemeContext.Provider value={{ theme:theme, switchTheme: this.switchTheme}}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
