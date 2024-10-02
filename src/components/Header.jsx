// import { useItemsContext } from "../lib/hooks";
import { useItemStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  // const {
  //   getLengthOfItems,
  //   itemsPacked
  // } = useItemsContext();
  const items = useItemStore(state => state.items);

  return (
    <header>
      <Logo />
      <Counter getLengthOfItems  = {items.length}
      numOfItemsPacked = {items.filter((item)=> item.packed).length}/>
    </header>
  )
}
