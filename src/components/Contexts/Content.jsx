import Counter from "../RenderProps/Counter";
import HoverCounter from "../RenderProps/HoverCounter";
import ThemeContext from "./ThemeContex";
export default function Content() {
  return (
    <div>
      <h1>this is a Content</h1>
      <Counter>
        {(count, IncrementCount) => (
            <ThemeContext.Consumer>
              {({theme, switchTheme}) => (
                <HoverCounter
                  count={count}
                  IncrementCount={IncrementCount}
                theme={theme}
                switchTheme ={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}
