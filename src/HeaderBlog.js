import Navigation from "./Navigation";
import blog from "./img/blog.png";

const HeaderBlog = () => {
  return (
    <header className="header-blog">
      <Navigation />
      <div className="blog-img-container">
        <img src={blog} alt="" className="blog-img" />
      </div>
    </header>
  );
};

export default HeaderBlog;
