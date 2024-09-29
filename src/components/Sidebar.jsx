import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleAddItem, handleRomoveAllItems, handleResetItems, handleMarkAllAsComplete, handleMarkAllAsIncomplete }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem = {handleAddItem}/>

      <ButtonGroup
      handleRomoveAllItems = {handleRomoveAllItems}
      handleResetItems = {handleResetItems}
      handleMarkAllAsComplete = {handleMarkAllAsComplete}
      handleMarkAllAsIncomplete = {handleMarkAllAsIncomplete}
      />
    </div>
  )
}
