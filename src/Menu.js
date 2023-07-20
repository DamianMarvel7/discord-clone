import logo from "./img/discord-black.svg";
import close from "./img/close.svg";

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
            <a href="/">Home</a>
            <a href="/discover">Discover</a>
            <a href="/blog">Blog</a>
            <a href="/create">Create Blog</a>
            <a href="/nitro">Nitro</a>
            <a href="/safety">Safety</a>
            <a href="/academy">Mod Academy</a>
            <a href="/support">Support</a>
            <a href="/careers">Careers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
