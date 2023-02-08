import WithCounter from "./WithCounter";

const ClickCounter = (props) => {
    const {count,setIncrementCounter} = props 
  return (
    <div>
      <h1 onMouseOver={setIncrementCounter}>Hovered {count} times</h1>
    </div>
  );
};


export default WithCounter(ClickCounter)