import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faClipboardCheck,faEdit } from '@fortawesome/free-solid-svg-icons'

const BasicButton = styled.button`
  padding: 0.991vh;
  margin: 0 auto;
  margin-left: 0.495vh;
  width: auto;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  border: 0;
  border-radius: 1.982vh;
  font-size: 1.486vh;
`;
const BasicInput = styled.input`
  display: inline-block;
  text-align: center;
  padding: 0.991vh;
  font-size: 2.477vh;
  width: 50%;
  background: transparent;
  color: ${(props) => props.theme.foreground};
  border: 0;
  &:focus {
    outline: ${(props) => props.theme.outline};
  }
  @media (min-width: 280px) and (max-width: 1024px) {
    width: 100%;
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
      <BasicButton
        type="button"
        onClick={(e) => {
          markAsComplete(!item.isComplete, itemID);
        }}
        className="check"
      >
      <FontAwesomeIcon icon={faClipboardCheck}/>
      </BasicButton>
      <BasicButton
        type="button"
        onClick={() => {
          onSubmit(text);
        }}
      >
      <FontAwesomeIcon icon={faEdit}/>
      </BasicButton>
      <BasicButton type="button" onClick={() => deleteItem(itemID)}>
      <FontAwesomeIcon icon={faTrashAlt}/>
      </BasicButton>
    </div>
  );
};

export default Item;
