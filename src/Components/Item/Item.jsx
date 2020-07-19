import React, { useState } from "react";
import Button from "../Button/index.jsx";
const Item = (props) => {
  const { deleteItem, markAsComplete, itemID, ToDo, item, setUpdate } = props;
  //text=ToDo
  const [text, setText] = useState(ToDo);
  const onSubmit = (value) => {
    let ayhaga = false;
    var letterNumber = /^[^\s]+(\s+[^\s]+)*$/;
    ayhaga = value.match(letterNumber) ? true : false;
    if (ayhaga) {
      setUpdate(value, itemID);
    }
  };
  return (
    <div key={itemID}>
      <input
        className="Edit"
        type="text"
        style={{
          textDecoration: item.isComplete && "line-through",
          background: ToDo !== text && "rgba(240,240,80,0.5)",
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
      <button
        type="button"
        value="Edit"
        className="Edit2"
        onClick={() => {
          onSubmit(text);
          console.log(text);
        }}
      >
        Edit Item
      </button>
      <Button
        type="button"
        onClick={() => deleteItem(itemID)}
        className="delete"
      >
        Delete
      </Button>
    </div>
  );
};

export default Item;
