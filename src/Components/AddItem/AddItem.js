import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let isTrimmed = false;
    var letterNumber = /^[^\s]+(\s+[^\s]+)*$/;
    isTrimmed = e.target.ToDo.value.match(letterNumber) ? true : false;
    if (isTrimmed) {
      this.props.addItem({ ToDo: e.target.ToDo.value });
    }
    document.getElementById("ToDo").value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter ToDo" id="ToDo" required />
          <input type="submit" id="ToDo2" value="Add Todo" />
        </form>
      </div>
    );
  }
}
export default AddItem;
