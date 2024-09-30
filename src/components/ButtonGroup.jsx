import Button from "./Button";

export default function ButtonGroup({
  handleRomoveAllItems,
  handleResetItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {

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
