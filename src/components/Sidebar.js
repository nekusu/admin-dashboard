import { useState, useEffect } from 'react';
import { useTransition } from 'react-transition-state';
import { useMediaQuery } from 'react-responsive';
import uniqid from 'uniqid';
import NavButton from './NavButton';
import GithubButton from './GithubButton';
import {
  RiHomeLine,
  RiUserLine,
  RiMessage3Line,
  RiHistoryLine,
  RiTodoLine,
  RiGroupLine,
  RiSettingsLine,
} from 'react-icons/ri';
import '../styles/Sidebar.css';

const buttons = [
  { icon: <RiHomeLine />, title: 'Home' },
  { icon: <RiUserLine />, title: 'Profile' },
  { icon: <RiMessage3Line />, title: 'Messages' },
  { icon: <RiHistoryLine />, title: 'History' },
  { icon: <RiTodoLine />, title: 'Tasks' },
  { icon: <RiGroupLine />, title: 'Communities' },
  { icon: <RiSettingsLine />, title: 'Settings' },
];
buttons.forEach(button => button.key = uniqid());

function Sidebar({ isOpen, toggleSidebar, defaultButton = 'Home' }) {
  const [selected, setSelected] = useState(defaultButton);
  const [transitionState, toggle] = useTransition({ timeout: 300 });
  const isScreenBigEnough = useMediaQuery({ minWidth: 911 });

  useEffect(() => toggle(isOpen), [isOpen]);
  if (isScreenBigEnough) toggleSidebar(false);

  return (
    <div className={`Sidebar ${transitionState}`}>
      <menu>
        {buttons.map(({ icon, title, key }) => (
          <NavButton
            key={key}
            icon={icon}
            title={title}
            selected={selected === title}
            handleClick={() => {
              toggleSidebar(false);
              setSelected(title);
            }}
          />
        ))}
      </menu>
      <GithubButton username={'nekusu'} />
    </div>
  );
}

export default Sidebar;
