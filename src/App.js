import React, { Component, useState } from "react";
import "./App.css";
import Items from "./Components/Items/Items.js";
import AddItem from "./Components/AddItem/AddItem.js";
import useLocalStorage from "./Hooks/UseLocalStorage";
function App() {
  //const [items, setItems] = useState([]);
  const [items, setItems] = useLocalStorage([], "todo-list");

  const addItem = ({ ToDo }) => {
    const item = { id: items.length, ToDo, isComplete: false };
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    let a7a = items.filter((item) => item.id !== id);
    setItems(a7a);
  };
  const setUpdate = (ToDo, id) => {
    let a77a = items.map((item) => {
      if (item.id === id) {
        item.ToDo = ToDo;
      }
      return item;
    });
    setItems([...a77a]);
  };
  const markAsComplete = (isComplete, id) => {
    let a77a = items.map((item) => {
      if (item.id === id) {
        item.isComplete = isComplete;
      }
      return item;
    });
    setItems([...a77a]);
  };
  return (
    <div className="App">
      <h1 className="center">Todo List</h1>
      <Items
        items={items}
        deleteItem={deleteItem}
        setUpdate={setUpdate}
        markAsComplete={markAsComplete}
      />
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
