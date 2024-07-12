import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  
  const [userData, setUserData] = useState([""]);
  const handleAll = () => {
    axios
      .get("https://signin-system-server.vercel.app/api/auth/all")
      .then((data) => {
        console.log(data.data);
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("user already exsist");
      });
  };

  const handleLogout = () => {
    cookies.remove("jwt_auth", { path: '/' })
    navigate("/"); 
  };

  return (
    <div className="bg-blue-900 h-screen">
      <div className="header p-2">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <button className="btn btn-accent mr-5" onClick={handleAll}>
                Get all user
              </button>
            </div>

            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li> <div className="bg-red-400" onClick={handleLogout}>Logout</div>
                 
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h1>
          {userData.map((e) => {
            return <h2>{e.username}</h2>;
          })}
        </h1>
      </div>
    </div>
  );
};

export default Home;
