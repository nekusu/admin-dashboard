import { loremIpsum } from 'lorem-ipsum';
import uniqid from 'uniqid';
import Item from '../../Item';
import Button from '../../Button';
import randomWords from '../../../utils/randomWords';
import {
  RiStarLine,
  RiDeleteBin6Line,
  RiShareLine,
} from 'react-icons/ri';

const buttons = [
  { icon: <RiStarLine />, title: 'Star' },
  { icon: <RiDeleteBin6Line />, title: 'Delete' },
  { icon: <RiShareLine />, title: 'Share' },
];
buttons.forEach(button => button.key = uniqid());
const projects = {};

function Project(props) {
  const {
    id,
    title = randomWords({ max: 4 }),
    description = loremIpsum({ count: 2 }),
  } = props;

  if (!projects[id]) {
    projects[id] = {
      title: title,
      description: description,
    };
  }

  return (
    <Item
      title={projects[id].title}
      description={projects[id].description}
      buttons={buttons.map(({ icon, title, key }) => (
        <Button
          key={key}
          icon={icon}
          title={title}
          alt
        />
      ))}
    />
  );
}

export default Project;
