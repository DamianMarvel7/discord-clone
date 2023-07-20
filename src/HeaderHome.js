import Menu from "./Menu";
import Navigation from "./Navigation";
import logo from "./img/discord.svg";
import download from "./img/download.svg";
import menu from "./img/menu.svg";
import { useEffect, useState } from "react";

const HeaderHome = () => {
  return (
    <header className="flexcol">
      <Navigation />

      <div className="header flexcol">
        <h1 className="flexcol">IMAGINE A PLACE</h1>
        <p className="text">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="discord-option flexcol">
          <div className="download flexrow">
            <img src={download} alt="" />
            <p>Download for Linux</p>
          </div>
          <div className="open flexrow">
            <p>Open Discord in your browser</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
