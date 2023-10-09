import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  const loadData = useLoaderData();
  console.log(loadData);

  return (
    <div className="my-10 space-y-5">
      <h2 className="text-3xl font-bold text-center ">
        Welcome to
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          GameHex
        </span>
        Blogs.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {loadData?.map((blog) => (
          <BlogsCard key={blog.id} blog={blog}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
