import logo from "./img/discord-black.svg";
import close from "./img/close.svg";
import { Link } from "react-router-dom";

const Menu = ({ openCloseMenu }) => {
  return (
    <div className="navigation-screen">
      <div className="background" onClick={openCloseMenu}></div>
      <div className="navigation-container flexcol">
        <div className="navigation">
          <div className="logo logo-nav flexrow">
            <div className="flexrow">
              <img src={logo} alt="" />
              <h4>Discord</h4>
            </div>
            <button onClick={openCloseMenu}>
              <img src={close} alt="" />
            </button>
          </div>
          <div className="link flexcol">
            <Link to="/">Home</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/create">Create Blog</Link>
            <Link to="/nitro">Nitro</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/academy">Mod Academy</Link>
            <Link to="/support">Support</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
