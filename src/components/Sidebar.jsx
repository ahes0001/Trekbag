import { useItemStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
// import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
  // const { handleAddItem } = useItemsContext();
  const handleAddItem = useItemStore(state => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem= {handleAddItem} />

      <ButtonGroup />
    </div>
  );
}
