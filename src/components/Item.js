import RandomAvatar from "./RandomAvatar";

function Item(props) {
  const {
    title,
    description,
    icon,
  } = props;

  return (
    <div className="Item">
      {icon && <RandomAvatar />}
      <div className="Info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Item;
