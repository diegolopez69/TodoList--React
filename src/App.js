import React from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = React.useState([
    { todo: "Tarea 1", complete: false },
    { todo: "Tarea 2", complete: false },
    { todo: "Tarea 3", complete: false },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]; 
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <div className="app">
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteTodoItem={deleteTodoItem}
          completeTodoItem={completeTodoItem}
          updateTodoItem={updateTodoItem}
        />
      ))}
    </div>
  );
}
export default App;
