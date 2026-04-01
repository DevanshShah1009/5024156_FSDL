import { useState } from "react";

function Home() {

  const [items, setItems] = useState(["Apple", "Banana"]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    if (newItem.trim() === "") return;

    setItems([...items, newItem]);
    setNewItem("");
  }

  return (
    <div className="container">
      <h2>Home Page</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <br /><br />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;