import React, { Component, useState } from 'react';
import './App.css';
import Items from './Components/Items/Items.js'
import AddItem from './Components/AddItem/AddItem.js'
function App () {

  const [items,setItems]=useState([]);
  const addItem = (item)=>{
    item.id = items.length;
    
    setItems([...items,item])
  }
  
    return(
      <div className="App">
        <h1 className="center">Todo List</h1>
        <Items items={items}  />
        <AddItem addItem={addItem} />
      </div>
    )
  
}

export default App;
