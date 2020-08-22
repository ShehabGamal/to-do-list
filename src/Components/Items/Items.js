import React from "react";
import "./Items.css";
import Item from "../Item/Item.jsx";
import styled from "styled-components";

const BasicDiv = styled.div`
  width: 100%;
  text-align: center;
  margin: 10% auto;
  color: ${(props) => props.theme.foreground};
`;

const Items = (props) => {
  const { items, deleteItem, markAsComplete, setUpdate } = props;
  const ListItems = items.map((item) => {
    return (
      <Item
        key={item.id}
        item={item}
        itemID={item.id}
        ToDo={item.ToDo}
        deleteItem={deleteItem}
        markAsComplete={markAsComplete}
        setUpdate={setUpdate}
      />
    );
  });

  return <BasicDiv>{ListItems}</BasicDiv>;
};
export default Items;
