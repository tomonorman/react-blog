import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Welcome to my New Blog!", body: "lorem ipsum...", author: "Tomo", id: 1 },
    { title: "Job Hunting after finishing a bootcamp", body: "lorem ipsum...", author: "Taku", id: 2 },
    { title: "Birthday Party for a 2 year old", body: "lorem ipsum...", author: "Tomo", id: 3 }
  ]);
  
  const handleDelete = (id) => {
    // Don't mutate original staste, but create new state by filtering:
    const newBlogs = blogs.filter(blog => blog.id !== id);
    // setBlogs to be the new array without deleted item
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("Hi Tomo");
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
   );
}

export default Home;