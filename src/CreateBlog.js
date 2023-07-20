import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [author, setAuthor] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { author, paragraph };

    setIsPending(true);
    console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Author:</label>
        <input
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          onChange={(e) => setParagraph(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
