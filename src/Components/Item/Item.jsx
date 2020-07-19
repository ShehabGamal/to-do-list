import React, { useState } from "react";
import Button from "../Button/index.jsx";

const Item = (props) => {
  const [value, setValue] = useState([]);
  const { deleteItem, markAsComplete, itemID, ToDo, item, setUpdate } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let ayhaga = false;
        var letterNumber = /^[^\s]+(\s+[^\s]+)*$/;
        let ourDiv;
        for (let index = 0; index < e.target.children.length; index++) {
          const element = e.target.children[index];
          if (element.id == itemID) {
            ourDiv = element;
            break;
          }
        }
        let ourInput;
        for (let index = 0; index < ourDiv.children.length; index++) {
          const element = ourDiv.children[index];
          if (element.id == itemID) {
            ourInput = element;
            break;
          }
        }
        ayhaga = ourInput.value.match(letterNumber) ? true : false;
        console.log(2);
        if (ayhaga) {
          console.log(1);
          setUpdate(ourInput.value, itemID);
        } else {
          ourInput.value = ToDo;
        }
      }}
    >
      <div id={itemID}>
        <input
          className="Edit"
          type="text"
          style={{ textDecoration: item.isComplete && "line-through" }}
          id={itemID}
          defaultValue={ToDo}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            markAsComplete(!item.isComplete, itemID);
          }}
          className="check"
        />
        <input type="submit" value="Edit Item" className="Edit2" />
        <Button
          type="button"
          onClick={() => deleteItem(itemID)}
          className="delete"
        >
          Delete
        </Button>
      </div>
    </form>
  );
};

export default Item;
