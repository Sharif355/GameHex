import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className=" font-medium text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium text-lg" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className=" font-medium text-lg" to="/streamers">
          Top Streamers
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-center md:navbar-start mr-3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-16"
              src="https://i.ibb.co/YtqYcXm/Gaming-logo-template-on-transparent-background-PNG-removebg-preview.png"
              alt=""
            />
            <p className="text-3xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text">
              GAMEHEX
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn normal-case bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
