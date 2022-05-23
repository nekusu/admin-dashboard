function Button(props) {
  const {
    icon,
    label,
    title,
    alt,
    className = '',
    type = 'button',
  } = props;

  return (
    <button
      className={`Button ${className} ${alt ? 'alt' : ''}`}
      type={type}
      title={title}
    >
      {icon}
      {label}
    </button>
  );
}

export default Button;
