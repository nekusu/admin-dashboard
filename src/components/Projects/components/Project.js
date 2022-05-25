import { useEffect } from 'react';
import { useTransition } from 'react-transition-state';
import Item from '../../Item';
import Button from '../../Button';
import {
  RiStarFill,
  RiStarLine,
  RiDeleteBin6Line,
  RiEditCircleLine,
} from 'react-icons/ri';

function Project(props) {
  const {
    id,
    title,
    description,
    isFavorite,
    setProjects,
  } = props;
  const [transitionState, toggle] = useTransition({
    timeout: 250,
    mountOnEnter: true,
  });
  const onFavorite = () => {
    setProjects(projects => projects.map(project => {
      if (project.id === id) {
        return { ...project, isFavorite: !project.isFavorite };
      }
      return project;
    }));
  };
  const onDelete = () => toggle(false);

  useEffect(() => toggle(true), [toggle]);
  useEffect(() => {
    if (transitionState === 'exited') {
      setProjects(projects => projects.filter(project => project.id !== id));
    }
  }, [transitionState]);

  return (
    <Item
      className={transitionState}
      title={title}
      description={description}
      buttons={[
        <Button
          key={`${id}-favorite`}
          className={isFavorite ? 'favorite' : ''}
          icon={isFavorite ? <RiStarFill /> : <RiStarLine />}
          title={isFavorite ? 'Unstar' : 'Star'}
          handleClick={onFavorite}
          alt
        />,
        <Button
          key={`${id}-edit`}
          icon={<RiEditCircleLine />}
          title="Edit"
          alt
        />,
        <Button
          key={`${id}-delete`}
          icon={<RiDeleteBin6Line />}
          title="Delete"
          handleClick={onDelete}
          alt
        />,
      ]}
    />
  );
}

export default Project;
