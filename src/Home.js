import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Welcome to my New Blog!", body: "lorem ipsum...", author: "Tomo", id: 1 },
    { title: "Job Hunting after finishing a bootcamp", body: "lorem ipsum...", author: "Taku", id: 2 },
    { title: "Birthday Party for a 2 year old", body: "lorem ipsum...", author: "Tomo", id: 3 }
  ]);
  
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
   );
}

export default Home;