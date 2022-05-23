import { loremIpsum } from 'lorem-ipsum';
import { useMediaQuery } from 'react-responsive';
import Header from "./Header";
import Item from "./Item";
import '../styles/Dashboard.css';

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

function Dashboard() {
  if (useMediaQuery({ minWidth: 1160 })) {
    return (
      <div className="Dashboard">
        <div className="MainContent">
          <Header />
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
        <Header />
      </div>
    </div>
  )
}

export default Dashboard;
