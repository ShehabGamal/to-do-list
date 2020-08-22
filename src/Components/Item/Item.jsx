import React, { useState } from "react";
import styled from "styled-components";

const BasicButton = styled.button`
  padding: 10px;
  margin: 0 auto;
  margin-left: 5px;
  width: 12%;
  float: right;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  border: 0;
  border-radius: 20px;
  font-size: 15px;
`;
const BasicInput = styled.input`
  display: inline-block;
  text-align: center;
  padding: 10px;
  font-size: 25px;
  width: 66%;
  background: transparent;
  color: ${(props) => props.theme.foreground};
  border: 0;
  &:focus {
    outline: ${(props) => props.theme.outline};
  }
`;

const Item = (props) => {
  const { deleteItem, markAsComplete, itemID, ToDo, item, setUpdate } = props;
  //text=ToDo
  const [text, setText] = useState(ToDo);
  const onSubmit = (value) => {
    let isTrimmed = false;
    var letterNumber = /^[^\s]+(\s+[^\s]+)*$/;
    isTrimmed = value.match(letterNumber) ? true : false;
    if (isTrimmed) {
      setUpdate(value, itemID);
    }
  };
  return (
    <div key={itemID}>
      <BasicInput
        type="text"
        style={{
          textDecoration: item.isComplete && "line-through",
          background: ToDo !== text && "#353535",
        }}
        id={itemID}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        type="checkbox"
        onChange={(e) => {
          markAsComplete(!item.isComplete, itemID);
        }}
        className="check"
      />
      <BasicButton
        type="button"
        onClick={() => {
          onSubmit(text);
        }}
      >
        Edit Item
      </BasicButton>
      <BasicButton type="button" onClick={() => deleteItem(itemID)}>
        Delete
      </BasicButton>
    </div>
  );
};

export default Item;
