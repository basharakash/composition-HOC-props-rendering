import React from "react";
export default class Form extends React.Component {
  state = {
    title: "",
    text: "",
    librye: "React",
    iawsome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        librye: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        iawsome: e.target.checked,
      });
    } else {
      console.log(e.target.checked);
      console.log("nothing new");
    }
  };
  submitHandler = (e) => {
    const { title, text, librye, iawsome } = this.state;
    e.preventDefault();
    console.log(title, text, librye, iawsome);
  };
  render() {
    const { title, text, librye, iawsome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <textarea
            name="text"
            placeholder="type javascript"
            value={text}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <select value={librye} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Anguler">Anguler</option>
            <option value="Vue">Vue</option>
          </select>

          <br />
          <br />

          <input
            type="checkbox"
            checked={iawsome}
            onChange={this.handleChange}
          ></input>

          <br />
          <br />

          <input type="submit" value="submit" />

          <h1>{title}</h1>
          <h1>{text}</h1>
        </form>
      </div>
    );
  }
}
