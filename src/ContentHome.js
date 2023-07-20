import decor from "./img/decoration.png";
import decor2 from "./img/decoration2.png";
import download from "./img/download.svg";

const Content = () => {
  return (
    <div className="content-container flexcol">
      <div className="content flexrow">
        <div className="decor flexcol">
          <img src={decor} alt="" />
        </div>
        <div className="desc flexcol">
          <h2>Create an invite-only place where you belong</h2>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
      <div className="content flexrow">
        <div className="desc flexcol">
          <h2>Where hanging out is easy</h2>
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="decor flexcol">
          <img src={decor} alt="" />
        </div>
      </div>
      <div className="content flexrow">
        <div className="decor flexcol">
          <img src={decor} alt="" />
        </div>
        <div className="desc flexcol">
          <h2>From few to a fandom</h2>
          <p>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>
      <div className="content2 flexcol">
        <div className="desc2 flexcol">
          <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
          <p>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <img src={decor2} alt="" className="decor2" />
      </div>
      <div className="content3 ">
        <div className="journey flexcol">
          <h2>Ready to start yout journey</h2>
          <div className="download">
            <p>Download for linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
