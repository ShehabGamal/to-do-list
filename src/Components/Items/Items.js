import React from "react";
import "./Items.css";
import Button from "../Button/index.jsx";
const Items = (props) => {
  const { items, deleteItem, setUpdate, setUpdate2 } = props;
  const ListItems = items.map((item) => {
    return (
      <div key={item.id}>
        <input
          className="Edit"
          type="text"
          style={{ textDecoration: item.isComplete && "line-through" }}
          id={item.id}
          value={item.ToDo}
          onChange={(e) => {
            setUpdate(e.target.value, item.id);
          }}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            setUpdate2(!item.isComplete, item.id);
          }}
          className="check"
        />
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
