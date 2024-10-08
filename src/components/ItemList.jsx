import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemStore } from "../stores/itemsStore";
// import { useItemsContext } from "../lib/hooks";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  // const {
  //   items,
  //   handleRemoveItem,
  //   handleToggleItem,
  // } = useItemsContext();

  const items = useItemStore(state => state.items);
  const handleRemoveItem = useItemStore(state => state.deleteItem);
  const handleToggleItem = useItemStore(state => state.toggleItem);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          handleRemoveItem={handleRemoveItem}
          handleToggleItem={handleToggleItem}
          item={item}
        />
      ))}
    </ul>
  );
}

function Item({ item, handleRemoveItem, handleToggleItem }) {
  return (
    <ul>
      <li className="item">
        <label>
          <input
            onChange={() => handleToggleItem(item.id)}
            checked={item.packed}
            type="checkbox"
          />{" "}
          {item.name}
        </label>
        <button onClick={() => handleRemoveItem(item.id)}>❌</button>
      </li>
    </ul>
  );
}
