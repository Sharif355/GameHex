import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

const BlogsCard = ({ blog }) => {
  const { id, title, publish_date, cover_img } = blog;

  return (
    <div className="flex gap-2 ">
      <img className="w-60 rounded-lg " src={cover_img} alt={title} />
      <div className="space-y-3">
        <p className="flex items-center gap-2">
          <FaCalendar></FaCalendar> {publish_date}
        </p>
        <h3 className="text-xl font-bold">{title}</h3>
        <Link to={`/blogs/${id}`}>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-3">
            Read More...
          </button>
        </Link>
      </div>
    </div>
  );
};

BlogsCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogsCard;
