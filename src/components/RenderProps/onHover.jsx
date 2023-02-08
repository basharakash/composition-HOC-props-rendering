import React from "react";

export default function ClickCounter({ count, IncrementCount }) {
  return (
    <div>
      <h1 onMouseOver={IncrementCount}>
        Item 2 Clicked {count} Times
      </h1>
    </div>
  );
}