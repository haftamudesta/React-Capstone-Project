import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BiMicrophone } from 'react-icons/bi';
import classes from './Navbar.module.css';

const NavBar = () => (
  <main>
    <nav>
      <div className={classes.aleft__nv}>
        <Link to="/" data-testid="back-arrow" className={classes.back__arrow}>
          <IoIosArrowBack />
        </Link>
      </div>
      <div className={classes.midle__nav}>
        <h1 data-testid="memes-title">Memes Generator</h1>
      </div>
      <div className={classes.right__nav}>
        <h4 data-testid="icon-michrophone">
          <BiMicrophone />
        </h4>
        <p data-testid="icon-setting">
          <IoIosSettings />
        </p>
      </div>
    </nav>
  </main>
);

export default NavBar;
