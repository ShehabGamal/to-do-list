import React from "react";
import "./Items.css";
import Button from "../Button/index.jsx";
const Items = (props) => {
  const { items, deleteItem, markAsComplete } = props;
  const ListItems = items.map((item) => {
    return (
      <div key={item.id}>
        <input
          className="Edit"
          type="text"
          style={{ textDecoration: item.isComplete && "line-through" }}
          id={item.id}
          value={item.ToDo}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            markAsComplete(!item.isComplete, item.id);
          }}
          className="check"
        />
        <button type="button" value="Edit" className="Edit2">
          Edit Item
        </button>
        <Button
          type="button"
          onClick={() => deleteItem(item.id)}
          className="delete"
        >
          Delete
        </Button>
      </div>
    );
  });

  return (
    <div className="ListItems">
      <div>{ListItems}</div>
    </div>
  );
};
export default Items;
