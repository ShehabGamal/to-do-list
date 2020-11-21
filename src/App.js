import React from "react";
import "./App.css";
import Items from "./Components/Items/Items.js";
import AddItem from "./Components/AddItem/AddItem.js";
import useLocalStorage from "./Hooks/UseLocalStorage";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Container = styled.div`
  background: ${(props) => props.theme.extraColor};
  height: 70vh;
  padding-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  width: 60%;
  margin: 10% auto;
`;
const BasicHeader = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 50px;
`;
function App() {
  //const [items, setItems] = useState([]);
  const [items, setItems] = useLocalStorage([], "todo-list");

  const addItem = ({ ToDo }) => {
    const item = { id: items.length, ToDo, isComplete: false };
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const setUpdate = (ToDo, id) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        item.ToDo = ToDo;
      }
      return item;
    });
    setItems([...newItems]);
  };
  const markAsComplete = (isComplete, id) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = isComplete;
      }
      return item;
    });
    setItems([...newItems]);
  };
  return (
    <Wrapper>
      <Container>
        <BasicHeader>Todo List</BasicHeader>
        <Items
          items={items}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
          markAsComplete={markAsComplete}
        />
        <AddItem addItem={addItem} />
      </Container>
    </Wrapper>
  );
}

export default App;
