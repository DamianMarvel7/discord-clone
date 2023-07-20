import Menu from "./Menu";
import logo from "./img/discord.svg";
import menu from "./img/menu.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openCloseMenu = () => {
    if (isMenu) {
      setIsMenu(false);
      document.body.style.overflow = "visible";
    } else {
      setIsMenu(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className="nav flexrow">
      {isMenu && <Menu openCloseMenu={openCloseMenu} />}
      <nav className="flexrow flexrow-center">
        <Link to="/">
          <div className="logo flexrow">
            <img src={logo} alt="" />
            <h4>Discord</h4>
          </div>
        </Link>

        {windowWidth > 1180 && (
          <div className="page flexrow">
            <Link to="/discover">Discover</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/create">Create Blog</Link>
            <Link to="/nitro">Nitro</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/support">Support</Link>
            <Link to="/careers">Careers</Link>
          </div>
        )}

        <div className="menu flexrow">
          <div className="login">
            <p>Login</p>
          </div>
          {windowWidth <= 1180 && (
            <img src={menu} alt="" onClick={openCloseMenu}></img>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
