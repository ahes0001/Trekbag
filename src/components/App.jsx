import { useState } from "react"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { initialItems } from "../lib/constants"


function App() {
  const [items, setItems] = useState(initialItems);

  const getLengthOfItems = items.length;

  const itemsPacked = items.filter((item) => item.packed).length;

  const handleAddItem = (newItemText) => {
    const newItem = { name: newItemText.trim(), packed: false, id: new Date().getTime() };

    setItems([...items, newItem]);
  }

  const handleRomoveAllItems = () => {
    setItems([]);
  }

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  // function: reset items to initial state

  const handleResetItems = () => {
    setItems(initialItems);
  }
  // Mark all as complete
  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  }

  // mark all as incomplete
  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  }

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  }

 

  
  

  return (
    <>
    <BackgroundHeading />

    <main>
      <Header getLengthOfItems = {getLengthOfItems} itemsPacked = {itemsPacked}/>
      <ItemList items = {items}
      handleRemoveItem = {handleRemoveItem} 
      handleToggleItem = {handleToggleItem}/>
      <Sidebar 
      handleRomoveAllItems = {handleRomoveAllItems}
      handleResetItems = {handleResetItems}
      handleAddItem = {handleAddItem}
      handleMarkAllAsComplete = {handleMarkAllAsComplete}
      handleMarkAllAsIncomplete = {handleMarkAllAsIncomplete}
      />
    </main>

    <Footer />
    </>
  )
}

export default App
