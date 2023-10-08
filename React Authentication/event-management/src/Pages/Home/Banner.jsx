import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mx-auto my-20">
      <div>
        <div className="carousel w-full">
          <div
            id="item1"
            className="carousel-item w-full flex flex-col lg:flex-row gap-2 justify-between"
          >
            <div className="w-full space-y-5">
              <h2 className="text-xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text">
                GameHex
              </h2>
              <h2 className=" text-3xl  md:text-5xl font-bold text-indigo-700">
                Arrange <br /> Different
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ml-2">
                  Gaming
                </span>
                <br /> Events
              </h2>
              <p className="text-base text-slate-400 text-justify">
                Looking for the perfect partner to organize and manage your
                gaming events? <br /> Meet GameHex, your trusted ally in event
                management for gaming since 2002.
              </p>
              <Link to="/booking">
                <button className="flex items-center mt-5 gap-2 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                  <FaCalendarAlt className="inline"></FaCalendarAlt> Book Your
                  Date
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
