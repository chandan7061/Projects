import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/headerLOGO.png";
import { useAuth } from "../context/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { user, setUser, isLogin, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("UserData");
    setIsLogin(false);
    setUser(false);
    navigate("/");
  };

  return (
    <nav className="bg-(--primary) shadow-md">
      <div className="h-16 px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
            <img
              src={logo}
              alt="Cravings Logo"
              className="h-14 object-contain"
            />
          </Link>
        </div>

        {/* Center Links */}
        <div className="flex-1 flex justify-center gap-10">
          <Link
            to="/"
            className="text-(--primary-text) font-medium hover:text-(--accent) transition"
          >
            Home
          </Link>

          <Link
            to="/contact-us"
            className="text-(--primary-text) font-medium hover:text-(--accent) transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {isLogin ? (
            <>
              {/* Profile Photo */}
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-(--accent)">
                <img
                  src={user.photo}
                  alt={user.fullName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User Name */}
              <Link
                to="/user/dashboard"
                className="text-(--primary-text) font-medium hover:text-(--accent) transition"
              >
                {user.fullName}
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="text-(--primary-text) text-2xl hover:text-red-500 transition"
              >
                <AiOutlineLogout />
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                to="/login"
                className="px-5 py-2 rounded-full bg-(--background) text-(--primary) font-semibold border border-(--background) transition-all duration-300 hover:bg-(--accent) hover:text-(--primary-text)"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-(--accent) text-(--primary-text) font-semibold border border-(--accent) transition-all duration-300 hover:bg-(--background) hover:text-(--primary)"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
