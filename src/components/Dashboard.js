import { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { useMediaQuery } from 'react-responsive';
import uniqid from 'uniqid';
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

const projectNames = [
  'Super Cool Project',
  'Less Cool Project',
  'Impossible App',
  'Easy Peasy App',
  'Ad Blocker',
  'Money Maker',
]
const buttons = [
  <Button key={uniqid()} icon={<RiStarLine />} title="Star" alt />,
  <Button key={uniqid()} icon={<RiEyeLine />} title="View" alt />,
  <Button key={uniqid()} icon={<RiShareLine />} title="Share" alt />,
];
const projects = (
  <section className="Projects">
    {projectNames.map(name => (
      <Item
        key={uniqid()}
        title={name}
        description={loremIpsum({ count: 2, units: 'sentences' })}
        buttons={buttons}
      />
    ))}
  </section>
)
const announcements = (
  <section className="Announcements">
    <h2>Announcements</h2>
    <Item
      title="Site Maintenance"
      description={loremIpsum({ count: 2, units: 'sentences' })}
    />
    <Item
      title="Community Share Day"
      description={loremIpsum({ count: 2, units: 'sentences' })}
    />
    <Item
      title="Updated Privacy Policy"
      description={loremIpsum({ count: 1, units: 'sentences' })}
    />
  </section>
)
const trending = (
  <section className="Trending">
    <h2>Trending</h2>
    <Item title="@tegan" description="World Peace Builder" icon />
    <Item title="@nekusu" description="Super Cool Project" icon />
    <Item title="@kendall" description="Life Changing App" icon />
    <Item title="@alex" description="No Traffic Maker" icon />
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
