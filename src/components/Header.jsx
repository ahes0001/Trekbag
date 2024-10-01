import { useItemsContext } from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const {
    getLengthOfItems,
    itemsPacked
  } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter getLengthOfItems  = {getLengthOfItems}
      itemsPacked = {itemsPacked}/>
    </header>
  )
}
