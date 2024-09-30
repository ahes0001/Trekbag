
export default function ItemList({ items }) {
  

  return (
    <ul>
      {items.map((item) => <Item key = {item.id} item = {item}/>)}
    </ul>
  );
}

function Item({ item }) {
  return (
    <ul>
      <li className="item">
         <label ><input checked={item.packed} type="checkbox"/> {item.name}</label>
         <button>❌</button>
      </li>
    </ul>
  );
}
