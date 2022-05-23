function Button(props) {
  const {
    icon,
    label,
    title,
    alt,
    handleClick,
    className = '',
    type = 'button',
  } = props;

  return (
    <button
      className={`Button ${className} ${alt ? 'alt' : ''}`}
      type={type}
      title={title}
      onClick={handleClick}
    >
      {icon}
      {label}
    </button>
  );
}

export default Button;
