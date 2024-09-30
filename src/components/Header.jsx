import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ getLengthOfItems, itemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter getLengthOfItems = {getLengthOfItems} itemsPacked = {itemsPacked} />
    </header>
  )
}
