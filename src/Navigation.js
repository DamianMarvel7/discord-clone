import Menu from "./Menu";
import logo from "./img/discord.svg";
import menu from "./img/menu.svg";
import { useEffect, useState } from "react";

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
        <a href="/">
          <div className="logo flexrow">
            <img src={logo} alt="" />
            <h4>Discord</h4>
          </div>
        </a>

        {windowWidth > 1180 && (
          <div className="page flexrow">
            <a href="discord-clone/discover">Discover</a>
            <a href="discord-clone/blog">Blog</a>
            <a href="discord-clone/create">Create Blog</a>
            <a href="/nitro">Nitro</a>
            <a href="/safety">Safety</a>
            <a href="/support">Support</a>
            <a href="/careers">Careers</a>
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
