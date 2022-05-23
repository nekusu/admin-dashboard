import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import uniqid from 'uniqid'
import NavButton from './NavButton';
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

function Sidebar({ defaultButton = 'Home' }) {
  const [selected, setSelected] = useState(defaultButton);

  if (useMediaQuery({ minWidth: 911 })) {
    return (
      <div className="Sidebar">
        <menu>
          {buttons.map(({ icon, title, key }) => (
            <NavButton
              key={key}
              icon={icon}
              title={title}
              selected={selected === title}
              handleClick={setSelected}
            />
          ))}
        </menu>
      </div>
    );
  }
}

export default Sidebar;
