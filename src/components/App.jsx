import React from "react";
import ListItem from "./ListItem";

function App() {
  const [headingText, setHeading] = React.useState(" ");

  function handleChange(event) {
    setHeading(event.target.value);
  }
  function AddMe() {
    setItems((prevItems) => {
      return [...prevItems, headingText];
    });
    setHeading(" ");
  }

  const [items, setItems] = React.useState([]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={headingText} />
        <button>
          <span onClick={AddMe}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((listItem, index) => {
            return (
              <ListItem key={index} text={listItem} onChecked={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
