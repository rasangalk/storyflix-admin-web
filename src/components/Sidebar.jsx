import React from "react";
import logo from "../images/logo.svg";
import albums from "../images/albums.svg";
import episodes from "../images/episodes.svg";
import notifications from "../images/notifications.svg";
import logout from "../images/logout.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col bg-white h-screen items-center space-y-[17rem] pt-12 rounded-r-2xl">
        <img src={logo} alt="logo" className="w-10" />
        <div className="flex flex-col gap-2">
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={albums} alt="albums" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={episodes} alt="episodes" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={notifications} alt="notifications" />
          </div>
        </div>
        <div>
          <img src={logout} alt="logout" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;