import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Blog = ({ blogs }) => {
  const history = useHistory();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/");
  const handleClicks = (id) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <main className="flexcol">
      <div className="blog">
        <h1>Discord Blog</h1>
        {blogs.map((blog) => (
          <div className="blog-container">
            <h2 className="author">{blog.author}</h2>
            <p>{blog.paragraph}</p>
            <button
              onClick={() => {
                handleClicks(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
