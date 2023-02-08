import React from "react";

export default function ClickCounter({ count, IncrementCount }) {
  return (
    <div>
      <button type="button" onClick={IncrementCount}>
        Item Clicked {count} Times
      </button>
    </div>
  );
}
