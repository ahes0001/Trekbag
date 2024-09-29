import { useRef, useState } from "react";
import Button from "./Button";


export default function AddItemForm({ setItems }) {
  const [itemName, setItemName] = useState("");
  const inputRef = useRef();

  function updateState(event) {
    const value = event.target.value;
    setItemName(value);
  }

  function submit(event) {
    event.preventDefault();

    //basic validation
    if (!itemName) {
      alert("Itent can't be empty");
      inputRef.current.focus();
      return;}


    const newItem = { name: itemName.trim(), packed: false, id: new Date().getTime() };
    setItems(prevItems => [...prevItems, newItem]);
    setItemName("");
  }
  
  return (
    <form onSubmit={submit}>
      <h2>Add an Item</h2>
      <input ref= {inputRef} autoFocus value = {itemName} onChange = {updateState} type="text" placeholder="Item name" />
      <Button> Add to list</Button>
    </form>
  )
}
