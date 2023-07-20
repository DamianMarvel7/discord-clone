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
import { BrowserRouter } from "react-router-dom";

function App() {
  // const {
  //   data: blogs,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs");
  return (
    <BrowserRouter basename="/discord-clone">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/discord-clone/">
              <HeaderHome />
              <Content />
              <Footer />
            </Route>
            <Route path="/discord-clone/discover">
              <HeaderDiscover />
              <ContentDiscover />
              <ContentDiscover2 />
              <Footer />
            </Route>
            {/* <Route path="/discord-clone/blog">
            <HeaderBlog />
            {error && <div>Error: {error}</div>}
            {blogs && <Blog blogs={blogs} />}
            <Footer />
          </Route>
          <Route path="/discord-clone/create">
            <HeaderBlog />
            <CreateBlog />
            <Footer />
          </Route> */}
            <Route path="*">
              <NotFound />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;