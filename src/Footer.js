import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import youtube from "./img/youtube.svg";
import tiktok from "./img/tiktok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flexrow">
      <div className="footer">
        <div className="footer1 flexcol">
          <div className="language">
            <select className="language-sel">
              <option value="English">English</option>
              <option value="Espanol">Espanol</option>
            </select>
          </div>
          <div className="social-media flexrow">
            <Link to="/twitter">
              <img src={twitter} alt="" />
            </Link>
            <Link to="/instagram">
              <img src={instagram} alt="" />
            </Link>
            <Link to="/facebook">
              <img src={facebook} alt="" />
            </Link>
            <Link to="/youtube">
              <img src={youtube} alt="" />
            </Link>
            <Link to="/tiktok">
              <img src={tiktok} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer">
          <div className="footer2">
            <h4>Product</h4>
            <Link to="/">Download</Link>
            <Link to="/">Nitro</Link>
            <Link to="/">Status</Link>
          </div>
          <div className="footer3">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/brand">Brand</Link>
            <Link to="/newsroom">Newsroom</Link>
          </div>
          <div className="footer4">
            <h4>Resources</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/create">Create Blog</Link>
            <Link to="/">Support</Link>
            <Link to="/">Safety</Link>
            <Link to="/">Feedback</Link>
            <Link to="/">Build</Link>
            <Link to="/">Streamkit</Link>
            <Link to="/">Creators</Link>
            <Link to="/">Community</Link>
            <Link to="/">Official 3rd Party Merch</Link>
          </div>
          <div className="footer5">
            <h4>Policies</h4>
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookie Settings</Link>
            <Link to="/">Guidelines</Link>
            <Link to="/">Acknowledgements</Link>
            <Link to="/">Licenses</Link>
            <Link to="/">Moderation</Link>
            <Link to="/">Company Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
