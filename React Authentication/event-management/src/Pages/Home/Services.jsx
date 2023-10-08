import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Services = ({ data }) => {
  const { id, name, image, price, short_description } = data;

  return (
    <div className=" space-y-2    rounded-lg shadow-lg mx-auto">
      <img className="w-full h-48 rounded-t-lg" src={image} alt={name} />
      <div className="p-2 space-y-2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="font-semibold">{price}</p>
        <p className="text-justify flex-grow pb-2 text-base text-slate-400">
          {short_description}
        </p>
        <Link to={`/services/${id}`}>
          <button className="btn normal-case bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  ">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Services.propTypes = {
  data: PropTypes.object,
};

export default Services;
