import Clock from "./clock";

export default function ClockList({ quantites = [] }) {
  return (
    <>
      <div>
        {quantites.map((key) => (
          <Clock key={key} />
        ))}
      </div>
      <div>
        {quantites.map((key) => (
          <Clock key={key} />
        ))}
      </div>
    </>
  );
}
