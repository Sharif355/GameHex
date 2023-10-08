import { useLoaderData, useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";

const BlogsCardDetails = () => {
  const { id } = useParams();

  const loadData = useLoaderData();

  const blog = loadData.find((blog) => blog.id === parseInt(id));

  return (
    <div className="space-y-5">
      <div className=" flex items-center justify-center">
        <h4 className="font-medium">
          <span className="text-slate-400">By</span> {blog.author_name}
        </h4>
        <BsDot className="text-xl text-purple-500"></BsDot>
        <h4 className="font-medium"> {blog.publish_date} </h4>
      </div>
      <h1 className="text-3xl font-semibold text-center"> {blog.title} </h1>
      <div className="flex gap-5 justify-center">
        <p className="border px-3 py-2 rounded-lg bg-slate-300 btn normal-case">
          eSports
        </p>
        <p className="border px-3 py-2 rounded-lg bg-slate-300 btn normal-case">
          Gaming
        </p>
        <p className="border px-3 py-2 rounded-lg bg-slate-300 btn normal-case">
          Bangladesh
        </p>
        <p className="border px-3 py-2 rounded-lg bg-slate-300 btn normal-case">
          Culture
        </p>
      </div>
      <img className="w-full" src={blog.cover_img} alt="blog" />
      <p className="text-lg text-justify"> {blog.detail_description} </p>
    </div>
  );
};

export default BlogsCardDetails;
