import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetItems,
    handleRomoveAllItems,
  } = useItemsContext();

  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
    { text: "Reset to initial", onClick: handleResetItems },
    { text: "Remove all items", onClick: handleRomoveAllItems },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button key={button.text} btnType="secondary" onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
}
