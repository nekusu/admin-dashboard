import uniqid from 'uniqid';
import Project from "./components/Project";
import randomNumber from '../../utils/randomNumber';

const projects = Array(randomNumber({ max: 10 })).fill().map(() => uniqid());

function Projects() {
  return (
    <section className="Projects">
      {projects.map(id => <Project key={id} id={id} />)}
    </section>
  );
}

export default Projects;
