import { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { useMediaQuery } from 'react-responsive';
import uniqid from 'uniqid';
import capitalize from 'capitalize';
import Header from "./Header";
import Item from "./Item";
import Button from "./Button";
import NavButton from './NavButton';
import {
  RiStarLine,
  RiEyeLine,
  RiShareLine,
  RiBookLine,
  RiMoreLine,
} from 'react-icons/ri';
import '../styles/Dashboard.css';

function randomNumber({ min = 1, max = 1 }) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomCapitalizedWords({ min = 1, max = 1 }) {
  return capitalize.words(
    loremIpsum({
      count: randomNumber({ min, max }),
      units: 'words',
    }));
}

const buttons = [
  <Button key={uniqid()} icon={<RiStarLine />} title="Star" alt />,
  <Button key={uniqid()} icon={<RiEyeLine />} title="View" alt />,
  <Button key={uniqid()} icon={<RiShareLine />} title="Share" alt />,
];
const projects = (
  <section className="Projects">
    {Array(randomNumber({ max: 10 })).fill(null).map(() => (
      <Item
        key={uniqid()}
        title={randomCapitalizedWords({ max: 4 })}
        description={loremIpsum({ count: 2 })}
        buttons={buttons}
      />
    ))}
  </section>
)
const announcements = (
  <section className="Announcements">
    <h2>Announcements</h2>
    {Array(randomNumber({ max: 4 })).fill(null).map(() => (
      <Item
        key={uniqid()}
        title={randomCapitalizedWords({ max: 4 })}
        description={loremIpsum({ count: randomNumber({ max: 2 }) })}
      />
    ))}
  </section>
)
const trending = (
  <section className="Trending">
    <h2>Trending</h2>
    {Array(randomNumber({ min: 3, max: 6 })).fill(null).map(() => (
      <Item
        key={uniqid()}
        title={`@${loremIpsum({ count: 1, units: 'words' })}`}
        description={randomCapitalizedWords({ max: 4 })}
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

  if (useMediaQuery({ minWidth: 1190 })) {
    return (
      <div className="Dashboard">
        <div className="MainContent">
          <Header />
          <h2>Projects</h2>
          {projects}
        </div>
        <aside>
          {announcements}
          {trending}
        </aside>
      </div>
    );
  }
  return (
    <div className="Dashboard">
      <div className="MainContent">
        <Header toggleSidebar={toggleSidebar} />
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
        {selected === 'Projects' && projects}
        {selected === 'More' && (
          <div className="More">
            {announcements}
            {trending}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard;
