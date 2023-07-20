import openai from "./img/openai.svg";
import community from "./img/community.jpg";
import search from "./img/search.svg";
import CommunityCategory from "./CommunityCategory";

const ContentDiscover = () => {
  return (
    <div className="content-all flexcol">
      <div className="content-discover flexcol">
        <div className="search flexrow">
          <input type="text" placeholder="Explore communities" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="community-container">
          <CommunityCategory />
          <div className="communities flexcol">
            <h4>28271 Results Found</h4>
            <div className="community flexrow">
              <img src={community} alt="" className="community-image" />
              <div className="community-desc flexcol">
                <div className="community-name flexrow">
                  <img src={openai} alt="" className="name-image" />
                  <h5>OpenAI</h5>
                </div>
                <div className="community-definition">
                  <p className="defintion">
                    A space for developers and enthusiasts to collaborate and
                    share creations built with OpenAI's powerful models.
                  </p>
                  <p className="online">992,714 Online - 14,536,395 Members</p>
                </div>
              </div>
            </div>
            <div className="community flexrow">
              <img src={community} alt="" className="community-image" />
              <div className="community-desc flexcol">
                <div className="community-name flexrow">
                  <img src={openai} alt="" className="name-image" />
                  <h5>OpenAI</h5>
                </div>
                <div className="community-definition">
                  <p className="defintion">
                    A space for developers and enthusiasts to collaborate and
                    share creations built with OpenAI's powerful models.
                  </p>
                  <p className="online">992,714 Online - 14,536,395 Members</p>
                </div>
              </div>
            </div>
            <div className="community flexrow">
              <img src={community} alt="" className="community-image" />
              <div className="community-desc flexcol">
                <div className="community-name flexrow">
                  <img src={openai} alt="" className="name-image" />
                  <h5>OpenAI</h5>
                </div>
                <div className="community-definition">
                  <p className="defintion">
                    A space for developers and enthusiasts to collaborate and
                    share creations built with OpenAI's powerful models.
                  </p>
                  <p className="online">992,714 Online - 14,536,395 Members</p>
                </div>
              </div>
            </div>
            <div className="community flexrow">
              <img src={community} alt="" className="community-image" />
              <div className="community-desc flexcol">
                <div className="community-name flexrow">
                  <img src={openai} alt="" className="name-image" />
                  <h5>OpenAI</h5>
                </div>
                <div className="community-definition">
                  <p className="defintion">
                    A space for developers and enthusiasts to collaborate and
                    share creations built with OpenAI's powerful models.
                  </p>
                  <p className="online">992,714 Online - 14,536,395 Members</p>
                </div>
              </div>
            </div>
            <div className="community flexrow">
              <img src={community} alt="" className="community-image" />
              <div className="community-desc flexcol">
                <div className="community-name flexrow">
                  <img src={openai} alt="" className="name-image" />
                  <h5>OpenAI</h5>
                </div>
                <div className="community-definition">
                  <p className="defintion">
                    A space for developers and enthusiasts to collaborate and
                    share creations built with OpenAI's powerful models.
                  </p>
                  <p className="online">992,714 Online - 14,536,395 Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-control flexrow">
        <span>&lt; Back</span>
        <div className="page-number flexrow">1</div>
        <div className="page-number flexrow">2</div>
        <div className="page-number flexrow">3</div>
        <div className="page-number flexrow">4</div>
        <div className="page-number flexrow">5</div>
        <div className="page-number flexrow">6</div>
        <div className="page-number flexrow">7</div>
        <div className="page-number flexrow">8</div>
        <span>Next &gt;</span>
      </div>
    </div>
  );
};

export default ContentDiscover;
