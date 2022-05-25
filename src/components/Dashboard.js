import { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { useMediaQuery } from 'react-responsive';
import uniqid from 'uniqid';
import Header from "./Header";
import Item from "./Item";
import NavButton from './NavButton';
import Projects from "./Projects";
import randomNumber from '../utils/randomNumber';
import randomWords from '../utils/randomWords';
import {
  RiBookLine,
  RiMoreLine,
} from 'react-icons/ri';
import '../styles/Dashboard.css';

const announcementsSection = (
  <section className="Announcements">
    <h2>Announcements</h2>
    {Array(randomNumber({ max: 4 })).fill().map(() => (
      <Item
        key={uniqid()}
        title={randomWords({ max: 4 })}
        description={loremIpsum({ count: randomNumber({ max: 2 }) })}
      />
    ))}
  </section>
)
const trendingSection = (
  <section className="Trending">
    <h2>Trending</h2>
    {Array(randomNumber({ min: 3, max: 6 })).fill().map(() => (
      <Item
        key={uniqid()}
        title={`@${randomWords({ capitalized: false })}`}
        description={randomWords({ max: 4 })}
        icon />
    ))}
  </section>
)
const navButtons = [
  { icon: <RiBookLine />, title: 'Projects' },
  { icon: <RiMoreLine />, title: 'More' },
]
navButtons.forEach(button => button.key = uniqid());

function Dashboard({ toggleSidebar }) {
  const [selected, setSelected] = useState('Projects');
  const [projects, setProjects] = useState(Array(randomNumber({ max: 10 })).fill().map(() => {
    return {
      id: uniqid(),
      title: randomWords({ max: 4 }),
      description: loremIpsum({ count: 2 }),
      isFavorite: false,
    }
  }));
  const projectsSection = <Projects projects={projects} setProjects={setProjects} />;
  const isScreenBigEnough = useMediaQuery({ minWidth: 1190 });

  return (
    <div className="Dashboard">
      <div className="MainContent">
        <Header toggleSidebar={toggleSidebar} />
        {isScreenBigEnough ? (
          <>
            <h2>Projects</h2>
            {projectsSection}
          </>
        ) : (
          <>
            <nav>
              {navButtons.map(({ icon, title, key }) => (
                <NavButton
                  key={key}
                  icon={icon}
                  title={title}
                  selected={selected === title}
                  handleClick={() => setSelected(title)}
                />
              ))}
            </nav>
            {selected === 'Projects' && projectsSection}
            {selected === 'More' && (
              <div className="More">
                {announcementsSection}
                {trendingSection}
              </div>
            )}
          </>
        )}
      </div>
      {isScreenBigEnough && (
        <aside>
          {announcementsSection}
          {trendingSection}
        </aside>
      )}
    </div>
  );
}

export default Dashboard;
