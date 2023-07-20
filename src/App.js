import Content from "./ContentHome";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
import HeaderDiscover from "./HeaderDiscover";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentDiscover from "./ContentDiscover";
import ContentDiscover2 from "./ContentDiscover2";
import HeaderBlog from "./HeaderBlog";
import Blog from "./Blog";
import { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import NotFound from "./NotFound";
import useFetch from "./useFetch";

function App() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HeaderHome />
            <Content />
            <Footer />
          </Route>
          <Route path="/discover">
            <HeaderDiscover />
            <ContentDiscover />
            <ContentDiscover2 />
            <Footer />
          </Route>
          <Route path="/blog">
            <HeaderBlog />
            {error && <div>Error: {error}</div>}
            {blogs && <Blog blogs={blogs} />}
            <Footer />
          </Route>
          <Route path="/create">
            <HeaderBlog />
            <CreateBlog />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
