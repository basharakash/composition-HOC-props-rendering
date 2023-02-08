import WithCounter from "./WithCounter";

const ClickCounter = (props) => {
    const {count,setIncrementCounter} = props 
  return (
    <div>
      <button type="button" onClick={setIncrementCounter}>Clicked {count} times</button>
    </div>
  );
};


export default WithCounter(ClickCounter)