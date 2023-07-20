import decor from "./img/decoration.png";
const ContentDiscover2 = () => {
  return (
    <div className="content-discover2 flexcol">
      <div className="add-server-container flexcol">
        <div className="add-server flexcol">
          <h3>Have a server you want to add to Discovery?</h3>
          <button>Make Your Community Public</button>
        </div>
      </div>
      <div className=" flexrow con-dis">
        <div className="desc flexcol desc-dis">
          <h3 className="place-text">Find a place where you belong</h3>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
          <button className="join-button">Join Discord</button>
        </div>
        <div className="decor flexcol">
          <img src={decor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContentDiscover2;
