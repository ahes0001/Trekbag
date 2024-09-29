import Button from "./Button";


export default function ButtonGroup({ handleRomoveAllItems, handleResetItems, handleMarkAllAsComplete, handleMarkAllAsIncomplete }) {

  return (
    <section className="button-group">
      {/* {secondaryButtons.map((buttonText) => (
        <Button handleRomoveAllItems = {handleRomoveAllItems} key={buttonText} type="secondary">
          {buttonText}
        </Button>
      ))} */}
      <Button onClick={handleMarkAllAsComplete} btnType="secondary">Mark all as complete</Button>
        <Button onClick={handleMarkAllAsIncomplete} btnType="secondary">Mark all as incomplete</Button>
        <Button onClick = {handleResetItems} btnType="secondary">Reset to initial</Button>
        <Button onClick = {handleRomoveAllItems} btnType="secondary">Remove all items</Button>
    </section>
  );
}
