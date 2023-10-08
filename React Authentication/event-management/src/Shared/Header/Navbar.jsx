import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive
                ? "linear-gradient(to right, #3B82F6, #9333EA)"
                : "",
              color: isPending ? "pink" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive
                ? "linear-gradient(to right, #3B82F6, #9333EA)"
                : "",
              color: isPending ? "pink" : "",
            };
          }}
          to="/booking"
        >
          Booking
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive
                ? "linear-gradient(to right, #3B82F6, #9333EA)"
                : "",
              color: isPending ? "pink" : "",
            };
          }}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Great..",
          text: "Log out Successfully!",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-center md:navbar-start mr-3">
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
              <Link className="pl-3" to="/login">
                Login
              </Link>
            </ul>
          </div>
          {user ? (
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <img className="w-10 rounded-full" src={user.photoURL} alt="" />{" "}
                <p>{user.displayName}</p>
              </div>
              <button
                onClick={handleLogOut}
                className="btn normal-case bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  "
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn normal-case bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hidden md:flex  ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
