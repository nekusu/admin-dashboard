import RandomAvatar from "./RandomAvatar";

function Item(props) {
  const {
    title,
    description,
    icon,
    buttons,
  } = props;

  return (
    <div className="Item">
      <div className="ItemHeader">
        {icon && <RandomAvatar scale={8} />}
        <div className="ItemInfo">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {buttons &&
        (<div className="ItemButtons">
          {buttons}
        </div>)}
    </div>
  );
}

export default Item;
