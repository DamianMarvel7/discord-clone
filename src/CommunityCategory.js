import all from "./img/all.svg";
import gaming from "./img/gaming.svg";
import entertainment from "./img/entertainment.svg";
import science from "./img/science.svg";
import education from "./img/education.svg";
import music from "./img/music.svg";

const CommunityCategory = () => {
  return (
    <div className="category">
      <div className="category1 flexrow">
        <div className="category-name flexrow">
          <img src={all} alt="" />
          <p>All</p>
        </div>
        <span>23530</span>
      </div>
      <div className="category1 flexrow">
        <div className="category-name flexrow">
          <img src={gaming} alt="" />
          <p>Gaming</p>
        </div>
        <span>173520</span>
      </div>
      <div className="category1 flexrow">
        <div className="category-name flexrow">
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <span>9916</span>
      </div>
      <div className="category1 flexrow">
        <div className="category-name flexrow">
          <img src={education} alt="" />
          <p>Education</p>
        </div>
        <span>1958</span>
      </div>
      <div className="category1 flexrow">
        <div className="category-name flexrow">
          <img src={science} alt="" />
          <p>Science & Tech</p>
        </div>
        <span>1833</span>
      </div>
      <div className="category1 flexrow">
        <div className="category-name flexrow">
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <span>1958</span>
      </div>
    </div>
  );
};

export default CommunityCategory;
