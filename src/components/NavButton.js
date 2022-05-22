function NavButton(props) {
  const {
    icon,
    title,
    selected,
    handleClick,
  } = props;

  return (
    <li
      className={`NavButton ${title} ${selected ? 'selected' : ''}`}
      onClick={() => handleClick(title)}
    >
      {icon}
      {title}
    </li>
  );
}

export default NavButton;
