import React from "react";
import { useNavigate } from "react-router-dom";
import album from "../images/albums.svg";
import episodes from "../images/episodes.svg";
import notifications from "../images/notifications.svg";
import logout from "../images/logout.svg";

function Sidebar({ status }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(false);
  };

  const activeTab = (status) => {
    if (status == "album") {
      return (
        <div className="flex flex-col gap-1">
          <div
            className="py-2 px-9 bg-slate-200 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={album} alt="albums" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img src={episodes} alt="episodes" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img src={notifications} alt="notifications" />
          </div>
        </div>
      );
    } else if (status == "episode") {
      return (
        <div className="flex flex-col gap-1">
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={album} alt="albums" />
          </div>
          <div
            className="py-2 px-9 bg-slate-200 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img src={episodes} alt="episodes" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img src={notifications} alt="notifications" />
          </div>
        </div>
      );
    } else if (status == "notification") {
      return (
        <div className="flex flex-col gap-1">
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={album} alt="albums" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img src={episodes} alt="episodes" />
          </div>
          <div
            className="py-2 px-9 bg-slate-200 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img src={notifications} alt="notifications" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-1">
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={album} alt="albums" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img src={episodes} alt="episodes" />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img src={notifications} alt="notifications" />
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div className="flex flex-col bg-white h-screen items-center space-y-[17rem] pt-12 rounded-r-2xl">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Flogo.svg?alt=media&token=99810c96-a9bc-4751-bcfb-f5649835c285"
          alt="logo"
          className="w-10"
        />
        {activeTab(status)}
        <div>
          <img
            src={logout}
            alt="logout"
            className="cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
