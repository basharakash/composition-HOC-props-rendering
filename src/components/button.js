import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextprops) {
	const { change: currentChange, locale: currentLocale } = this.props;
	const { change: nextChange, locale: nextLocale } = nextprops;
	if (currentChange === nextChange && nextLocale === currentLocale) {
	  return false;
	} else {
	  return true;
	}
  }
  render() {
	const { change, locale } = this.props;
	return (
	  <button type="button" onClick={() => change(locale)}>
		Click hare
	  </button>
	);
  }
}

export default Button;