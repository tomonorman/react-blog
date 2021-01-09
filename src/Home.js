import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []); // The second argument prevents useEffect from firing everytime there is a rerender, only what changes inside the array

  return (
    <div className="home">
      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
   );
}

export default Home;