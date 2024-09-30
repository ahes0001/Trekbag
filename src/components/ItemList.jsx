import { useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList({ items, handleRemoveItem, handleToggleItem }) {
  
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    } else if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });

  return (
    <ul className="item-list">
      {
        items.length === 0? <EmptyView/>: null
      }
      {
        items.length > 0 && <section className="sorting">
          <Select onChange= {option => setSortBy(option.value)} defaultValue ={sortingOptions[0]} options={sortingOptions}/>
        </section>
      }

      {sortedItems.map((item) => <Item key = {item.id} handleRemoveItem = {handleRemoveItem} handleToggleItem = {handleToggleItem} item = {item}/>)}
    </ul>
  );
}

function Item({ item, handleRemoveItem, handleToggleItem }) {
  return (
    <ul>
      <li className="item">
         <label ><input onChange = {()=>handleToggleItem(item.id)} checked={item.packed} type="checkbox"/> {item.name}</label>
         <button onClick={()=>handleRemoveItem(item.id)}>❌</button>
      </li>
    </ul>
  );
}
