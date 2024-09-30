import EmptyView from "./EmptyView";

export default function ItemList({ items, handleRemoveItem, handleToggleItem }) {
  

  return (
    <ul className="item-list">
      {
        items.length === 0? <EmptyView/>: null
      }

      {items.map((item) => <Item key = {item.id} handleRemoveItem = {handleRemoveItem} handleToggleItem = {handleToggleItem} item = {item}/>)}
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
