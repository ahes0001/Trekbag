import Button from "./Button";
const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

export default function ButtonGroup() {

  return (
    <section className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button key={buttonText} type="secondary">
          {buttonText}
        </Button>
      ))}
      {/* <Button type="secondary">Mark all as complete</Button>
        <Button type="secondary">Mark all as incomplete</Button>
        <Button type="secondary">Reset to initial</Button>
        <Button type="secondary">Remove all items</Button> */}
    </section>
  );
}
