import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {

    const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || initialItems);


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

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
      }, [items]);

    
  return (
    <ItemsContext.Provider value={{
        items,
        getLengthOfItems,
        itemsPacked,
        handleAddItem,
        handleRomoveAllItems,
        handleRemoveItem,
        handleResetItems,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleToggleItem
    }}>
      {children}
    </ItemsContext.Provider>
  )
}
