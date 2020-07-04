import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.ToDo.value !== "") {
      this.props.addItem({ ToDo: e.target.ToDo.value });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter ToDo" id="ToDo" />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}
export default AddItem;
