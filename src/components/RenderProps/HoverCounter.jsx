import React from "react";

export default function ClickCounter({ count, IncrementCount , theme, switchTheme}) {
  const style = theme === 'dark' ? {backgroundColor : '#3cc71a', color: '#ffffff'} : null
  return (
    <div>
      <h1 onMouseOver={IncrementCount} style ={style}>
        Item Clicked {count} Times
      </h1>
      <button type="button" onClick={switchTheme}>Switch theme</button>
    </div>
  );
}