import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import youtube from "./img/youtube.svg";
import tiktok from "./img/tiktok.svg";

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
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={youtube} alt="" />
            </a>
            <a href="">
              <img src={tiktok} alt="" />
            </a>
          </div>
        </div>
        <div className="footer2">
          <h4>Product</h4>
          <a href="">Download</a>
          <a href="">Nitro</a>
          <a href="">Status</a>
        </div>
        <div className="footer3">
          <h4>Company</h4>
          <a href="">About</a>
          <a href="">Jobs</a>
          <a href="">Brand</a>
          <a href="">Newsroom</a>
        </div>
        <div className="footer4">
          <h4>Resources</h4>
          <a href="/blog">Blog</a>
          <a href="/create">Create Blog</a>
          <a href="">Support</a>
          <a href="">Safety</a>
          <a href="">Feedback</a>
          <a href="">Build</a>
          <a href="">Streamkit</a>
          <a href="">Creators</a>
          <a href="">Community</a>
          <a href="">Official 3rd Party Merch</a>
        </div>
        <div className="footer5">
          <h4>Policies</h4>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Cookie Settings</a>
          <a href="">Guidelines</a>
          <a href="">Acknowledgements</a>
          <a href="">Licenses</a>
          <a href="">Moderation</a>
          <a href="">Company Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
