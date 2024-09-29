import { useState } from "react"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { initialItems } from "../lib/constants"


function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = { name: newItemText.trim(), packed: false, id: new Date().getTime() };

    setItems([...items, newItem]);
  }

  return (
    <>
    <BackgroundHeading />

    <main>
      <Header />
      <ItemList items = {items} />
      <Sidebar handleAddItem = {handleAddItem}/>
    </main>

    <Footer />
    </>
  )
}

export default App
