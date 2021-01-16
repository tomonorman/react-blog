import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(response => {
        if (!response.ok) {
          throw Error("could not fetch data for that resource");
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        setIsPending(false);
        setError(error.message);
      })
  }, []); // The second argument prevents useEffect from firing everytime there is a rerender, only what changes inside the array

  return (
    <div className="home">
      { error && <div> {error} </div>}
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
   );
}

export default Home;