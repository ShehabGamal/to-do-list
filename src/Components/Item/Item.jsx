import React from "react";
import Button from "../Button/index.jsx";
const Item = (props) => {
  const { deleteItem, markAsComplete, itemID, ToDo, item } = props;

  return (
    <div key={itemID}>
      <input
        className="Edit"
        type="text"
        style={{ textDecoration: item.isComplete && "line-through" }}
        id={itemID}
        value={ToDo}
      />
      <input
        type="checkbox"
        onChange={(e) => {
          markAsComplete(!item.isComplete, itemID);
        }}
        className="check"
      />
      <button type="button" value="Edit" className="Edit2">
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
