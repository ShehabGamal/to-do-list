import React from "react";
import "./Items.css";
import Item from "../Item/Item.jsx";
const Items = (props) => {
  const { items, deleteItem, markAsComplete } = props;
  const ListItems = items.map((item) => {
    return (
      <Item
        key={item.id}
        item={item}
        itemID={item.id}
        ToDo={item.ToDo}
        deleteItem={deleteItem}
        markAsComplete={markAsComplete}
      />
    );
  });

  return (
    <div className="ListItems">
      <div>{ListItems}</div>
    </div>
  );
};
export default Items;
