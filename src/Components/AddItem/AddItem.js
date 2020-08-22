import React, { Component } from "react";
import "./AddItem.css";
import styled from "styled-components";

const BasicInput = styled.input`
  &:focus {
    outline: ${(props) => props.theme.outline};
  }
  font-family: ${(props) => props.theme.fontFamily};
  padding: 10px;
  color: ${(props) => props.theme.foreground};
  width: 20%;
  background: ${(props) => props.theme.mainColor};
  border: 0;
  margin: 0 auto;
  border-radius: 20px;
  height: 50px;
  font-size: 20px;
`;
const ExtendedBasicInput1 = styled(BasicInput)`
  background: transparent;
  width: 76%;
  text-align: center;
  ::placeholder {
    color: ${(props) => props.theme.foreground};
  }
  border-radius: 0px;
`;

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
          <ExtendedBasicInput1
            type="text"
            placeholder="What Is in Your Mind ??!"
            id="ToDo"
            required
          />
          <BasicInput type="submit" id="ToDo2" value="Add Todo" />
        </form>
      </div>
    );
  }
}
export default AddItem;
