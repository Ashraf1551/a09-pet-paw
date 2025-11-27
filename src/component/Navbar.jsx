import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive ? "bg-primary text-primary-content" : "hover:bg-base-200"
    }`;

  return (
    <nav className="bg-base-100/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-50 mt-3 w-52 p-3 shadow-lg border border-base-200"
              >
                <li>
                  <NavLink to="/" className={navLinkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className={navLinkClass}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile" className={navLinkClass}>
                    My Profile
                  </NavLink>
                </li>
              </ul>
            </div>

            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-xl font-bold text-base-content">
                Pet<span className="text-primary">Paw</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/profile" className={navLinkClass}>
              My Profile
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 relative group">
                  <div className="avatar cursor-pointer">
                    <div className="w-9 h-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                      <img
                        src={user.photoURL || "https://i.pravatar.cc/150?img=3"}
                        alt={user.displayName || "User"}
                      />
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-base-300 text-base-content text-sm font-medium rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {user.displayName || "User"}
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-error btn-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="btn btn-ghost btn-sm">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
