
export default function Counter({getLengthOfItems, numOfItemsPacked}) {
  return (
    <p><b>{numOfItemsPacked} / {getLengthOfItems} items packed</b></p>
  )
}
