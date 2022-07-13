import React from "react";
import { useNavigate } from "react-router-dom";

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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Falbums.svg?alt=media&token=99f5ca76-ae1b-4d44-8096-10ae510b961a"
              alt="albums"
            />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fepisodes.svg?alt=media&token=75ea8162-0148-452c-aef2-6a3ee1a60ad6"
              alt="episodes"
            />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fnotifications.svg?alt=media&token=0bdbe64f-b807-4d8f-a1d2-97291dea5179"
              alt="notifications"
            />
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Falbums.svg?alt=media&token=99f5ca76-ae1b-4d44-8096-10ae510b961a"
              alt="albums"
            />
          </div>
          <div
            className="py-2 px-9 bg-slate-200 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fepisodes.svg?alt=media&token=75ea8162-0148-452c-aef2-6a3ee1a60ad6"
              alt="episodes"
            />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fnotifications.svg?alt=media&token=0bdbe64f-b807-4d8f-a1d2-97291dea5179"
              alt="notifications"
            />
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Falbums.svg?alt=media&token=99f5ca76-ae1b-4d44-8096-10ae510b961a"
              alt="albums"
            />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fepisodes.svg?alt=media&token=75ea8162-0148-452c-aef2-6a3ee1a60ad6"
              alt="episodes"
            />
          </div>
          <div
            className="py-2 px-9 bg-slate-200 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fnotifications.svg?alt=media&token=0bdbe64f-b807-4d8f-a1d2-97291dea5179"
              alt="notifications"
            />
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Falbums.svg?alt=media&token=99f5ca76-ae1b-4d44-8096-10ae510b961a"
              alt="albums"
            />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/episodes");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fepisodes.svg?alt=media&token=75ea8162-0148-452c-aef2-6a3ee1a60ad6"
              alt="episodes"
            />
          </div>
          <div
            className="py-2 px-9 hover:bg-slate-300 rounded-r-xl cursor-pointer"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Fnotifications.svg?alt=media&token=0bdbe64f-b807-4d8f-a1d2-97291dea5179"
              alt="notifications"
            />
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
            src="https://firebasestorage.googleapis.com/v0/b/prototype-storyflix.appspot.com/o/web%2Flogout.svg?alt=media&token=1ce3899c-2366-4303-91b6-791d05d558d3"
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
