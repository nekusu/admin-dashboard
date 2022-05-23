import { randpix, RandpixColorScheme } from 'randpix';

function RandomAvatar(props) {
  const {
    className = '',
    name = 'Random Avatar',
    scale = 4,
  } = props;
  const colorSchemes = Object.keys(RandpixColorScheme);
  const randomIndex = Math.floor(Math.random() * colorSchemes.length);
  const colorScheme = colorSchemes[randomIndex];
  const generate = randpix({
    colorScheme: RandpixColorScheme[colorScheme],
    scale,
  })
  const art = generate()
  const dataURL = art.toDataURL()

  return (
    <img
      className={`Avatar ${className}`}
      src={dataURL}
      alt={name}
      title={name}
    />
  )
}

export default RandomAvatar;
