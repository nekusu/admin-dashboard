import Project from "./components/Project";

function Projects({ projects, setProjects }) {
  return (
    <section className="Projects">
      {projects.map(({ id, title, description, isFavorite, link }) => (
        <Project
          key={id}
          id={id}
          title={title}
          description={description}
          isFavorite={isFavorite}
          link={link}
          setProjects={setProjects}
        />
      ))}
    </section>
  );
}

export default Projects;
